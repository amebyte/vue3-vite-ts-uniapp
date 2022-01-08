<template>
  <view style="background: #fff; padding: 20rpx 0">
    <view
      v-if="mode == 'picker' || mode == 'pickerRange'"
      class="form-item form-item-calendar"
      :class="formatValue == '' ? ' placeholder' : ''"
      @click="showPicker"
    >
      <image src="./images/calendar.svg" />
      <text>{{ formatValue == '' ? placeholder : formatValue }}</text>
    </view>
    <view v-if="mode == 'normal' || showCalendar" class="calendar" :class="mode != 'normal' ? ' fixed' : ''">
      <view class="calendar-title">
        <image src="./images/btn_pre.svg" @click="pre" />
        <text>{{ title }}</text>
        <image src="./images/btn_next.svg" @click="next" />
      </view>
      <view class="container-days">
        <view v-for="(item, index) in weekdays" :key="index" class="day day-header">
          {{ item }}
        </view>
        <view
          v-for="(day, index) in days"
          :key="day.id"
          class="day"
          :class="day.currentMonth ? ' day-current-month' : ''"
          @click="onDayClick(index)"
        >
          <view class="day-range" :class="day.rangeClassName">
            <view class="day-content" :class="day.className" :style="day.currentMonth ? day.style : ''">
              <text>{{ day.text }}</text>
              <view v-if="day.currentMonth" class="badge-num">
                <view v-if="day.showSubNum" class="content-sub-num" :style="day.subStyle">
                  {{ day.subNum }}
                </view>
              </view>
              <view class="content-sub">
                <view v-if="day.showDot" class="content-sub-dot" :style="'background: ' + day.dotColor" />
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { ref, getCurrentInstance, reactive, toRef, computed, defineComponent, toRefs, onMounted } from 'vue'
const MODES = {
  normal: 'normal',
  picker: 'picker',
  pickerRange: 'pickerRange',
}
const LANGUAGES = {
  en: 'EN',
  zh: 'ZH',
}
const SELECTEDMODE = {
  square: 'square',
  round: 'round',
}

const MONTHS_EN = ['', 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']

const WEEKDAYS_ZH = ['日', '一', '二', '三', '四', '五', '六']
const WEEKDAYS_EN = ['SUN', 'MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT']

export default defineComponent({
  name: 'CalendarComponent',
  props: {
    mode: {
      type: String,
      default: 'normal',
    },
    placeholder: {
      type: String,
      default: '请选择日期',
    },
    // title: {
    //     type: String,
    //     value: ''
    // },
    language: {
      type: String,
      default: 'ZH',
    },
    selectedMode: {
      type: String,
      default: 'round',
    },
    showMoreDays: {
      // 是否显示非本月的日期
      type: Boolean,
      default: true,
    },
    showDot: {
      // 是否日期下的小点
      type: Boolean,
      default: true,
    },
    // year: {
    //     type: Number,
    //     value: -1
    // },
    // month: { // 注意，这里的month从1开始
    //     type: Number,
    //     value: -1
    // },
    selectedDate: {
      type: String,
      default: '',
    },
    daysStyle: {
      type: Array,
      default: () => {
        return []
      },
    },
    dotColor: {
      type: String,
      default: '#f00',
    },
    dotDays: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  emits: ['onMonthChange', 'onDayClick', 'onRangeComplete'],
  setup(props, { emit }) {
    let state = reactive({
      initFinished: false,
      selectedClassName: '',
      currenDate: null as any, // 当前显示月份的第一天
      days: [] as any,
      beginDateObj: null as any,
      endDateObj: null as any,
      formatValue: '',
      showCalendar: false,

      weekdays: [],
      title: '',
      year: -1,
      month: -1,
      selectedDated: props.selectedDate,
    })

    const refreshCalendar = () => {
      const now = new Date()
      let currenDate = state.currenDate
      let year = currenDate.getFullYear()
      let month = currenDate.getMonth() + 1
      let days = [] as any
      let days_pre = [] as any
      let days_next = [] as any
      let length_days = getMonthDayCount(currenDate)
      // 本月的天数数据
      for (let i = 0; i < length_days; i++) {
        let date = new Date(currenDate.getTime() + 86400000 * i)
        let id = formatDate(date)
        let day = {
          id: id,
          date: date,
          currentMonth: true,
        }
        days.push(day)
      }
      let d_first_day = getFirstDay(currenDate)
      let lenght_pre = d_first_day.getDay()
      for (let i = 0; i < lenght_pre; i++) {
        let date = new Date(currenDate.getTime() - 86400000 * (lenght_pre - i))
        let id = formatDate(date)
        let day = {
          id: id,
          date: date,
          currentMonth: false,
        }

        days_pre.push(day)
      }
      days = [...days_pre, ...days]
      let lenght_next = Math.abs((days.length % 7) - 7)
      lenght_next = lenght_next == 7 ? 0 : lenght_next
      let d_next_month_first_day = getNextMonthFirstDay(currenDate)

      for (let i = 0; i < lenght_next; i++) {
        let date = new Date(d_next_month_first_day.getTime() + 86400000 * i)
        let id = formatDate(date)
        let day = {
          id: id,
          date: date,
          currentMonth: false,
        }
        days_next.push(day)
      }
      days = [...days, ...days_next]

      const nowFormat = formatDate(now.getTime())
      // 统一处理一些特殊属性
      days.forEach((element) => {
        element.isToday = element.id === nowFormat
        if (element.isToday) {
          element.className = 'today'
        }
        if (element.currentMonth) {
          element.text = '' + element.date.getDate()
          element.clickable = true
        } else {
          if (props.showMoreDays) {
            element.text = '' + element.date.getDate()
            element.clickable = true
          } else {
            element.text = ''
            element.clickable = false
          }
        }
        if (props.dotDays.includes(element.id)) {
          element.showDot = true
          element.dotColor = props.dotColor
        }
        if (state.beginDateObj != null && state.endDateObj != null) {
          const start = state.beginDateObj.getTime()
          const end = state.endDateObj.getTime()
          if (start < element.date.getTime() && element.date.getTime() < end) {
            element.inRange = true
          } else {
            element.inRange = false
          }
          if (element.date.getTime() == state.beginDateObj.getTime()) {
            element.rangeClassName += ' day-range-start'
          }
          if (element.date.getTime() == state.endDateObj.getTime()) {
            element.rangeClassName += ' day-range-end'
          }
        } else {
          element.inRange = false
        }
        if (element.inRange) {
          element.isToday = false
          element.rangeClassName = 'day-in-range'
        }
        let selectedDate = state.selectedDated
        let beginDate = state.beginDateObj != null ? formatDate(state.beginDateObj.getTime()) : ''
        let endDate = state.endDateObj != null ? formatDate(state.endDateObj.getTime()) : ''
        if (element.id == selectedDate || element.id == beginDate || element.id == endDate) {
          element.className = state.selectedClassName
        }
        element.style = getStyleById(element.id)
        const param = getParamById(element.id)
        element.showSubNum = param.showSubNum
        element.subNum = param.subNum
        element.subStyle = param.subStyle
        element.showDot = param.showDot
        element.dotColor = param.dotColor
      })
      let title = `${year}年 ${month}月`
      switch (props.language) {
        case LANGUAGES.en:
          title = `${MONTHS_EN[month]} ${year}`
          break
      }

      state.title = title
      state.year = year
      state.month = month
      state.days = days
    }

    const getStyleById = (id) => {
      let styleArr = props.daysStyle as any
      for (let i = 0; i < styleArr.length; i++) {
        if (styleArr[i].id == id) {
          return styleArr[i].style
        }
      }
      return ''
    }

    const getParamById = (id) => {
      let styleArr = props.daysStyle as any
      for (let i = 0; i < styleArr.length; i++) {
        if (styleArr[i].id == id) {
          return styleArr[i]
        }
      }
      return {}
    }

    const getFirstDay = (date) => {
      let year = date.getFullYear()
      let month = date.getMonth()
      return new Date(year + '/' + (month + 1) + '/1')
    }

    const getPreMonthFirstDay = (date) => {
      let year = date.getFullYear()
      let month = date.getMonth()
      if (month == 0) {
        return new Date(year - 1 + '/12/01')
      } else {
        return new Date(year + '/' + month + '/01')
      }
    }

    const getNextMonthFirstDay = (date) => {
      let year = date.getFullYear()
      let month = date.getMonth()
      if (month == 11) {
        return new Date(year + 1 + '/01/01')
      } else {
        return new Date(year + '/' + (month + 2) + '/01')
      }
    }

    const getMonthDayCount = (date) => {
      let year = date.getFullYear()
      let month = date.getMonth()
      // 日期所在月份的第一天
      let d_first_day = new Date(year + '/' + (month + 1) + '/1')
      let d_pre_month_last_day = new Date(d_first_day.getTime() - 86400000)
      let d_next_month_first_day
      if (month == 11) {
        d_next_month_first_day = new Date(year + 1 + '/01/01')
      } else {
        d_next_month_first_day = new Date(year + '/' + (month + 2) + '/01')
      }
      return (d_next_month_first_day.getTime() - d_first_day.getTime()) / 86400000
    }

    const pre = () => {
      let currenDate = getPreMonthFirstDay(state.currenDate)

      state.currenDate = currenDate
      refreshCalendar()
      emit('onMonthChange', currenDate)
    }

    const next = () => {
      let currenDate = getNextMonthFirstDay(state.currenDate)
      state.currenDate = currenDate
      refreshCalendar()
      emit('onMonthChange', currenDate)
    }

    const showPicker = () => {
      state.showCalendar = true
    }

    const onDayClick = (index) => {
      let day = state.days[index]
      if (!day.clickable) {
        return
      }
      if (props.mode == MODES.normal || props.mode == MODES.picker) {
        let selectedDate = formatDate(day.date)
        let formatValue = formatDate(day.date)

        state.showCalendar = false
        state.selectedDated = selectedDate
        state.formatValue = formatValue
        emit('onDayClick', day)
      } else if (props.mode == MODES.pickerRange) {
        console.log('选择范围模式')
        if (state.beginDateObj == null) {
          state.beginDateObj = day.date
        } else if (state.endDateObj == null) {
          let formatValue
          // 不管用户怎么选，小的都是开始日期
          if (day.date.getTime() < state.beginDateObj.getTime()) {
            formatValue = formatDate(day.date) + ' 至 ' + formatDate(state.beginDateObj)
            state.showCalendar = false
            state.beginDateObj = day.date
            state.endDateObj = state.beginDateObj
            state.formatValue = formatValue
          } else {
            formatValue = formatDate(state.beginDateObj) + ' 至 ' + formatDate(day.date)
            state.showCalendar = false
            state.endDateObj = day.date
            state.formatValue = formatValue
          }
          let result = {
            begin: state.beginDateObj,
            end: state.endDateObj,
          }
          emit('onRangeComplete', result)
        } else {
          state.beginDateObj = null
          state.endDateObj = null
        }
      }
      refreshCalendar()
    }

    const formatDate = (time) => {
      var d = new Date(time)
      var year = d.getFullYear()
      var month = d.getMonth() + 1
      var day = d.getDate()
      return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
    }

    onMounted(() => {
      console.log(1111)
      let selectedClassName
      if (SELECTEDMODE.square == props.selectedMode) {
        selectedClassName = 'day-selected-square'
      } else {
        selectedClassName = 'day-selected-round'
      }
      if (props.mode == MODES.pickerRange) {
        // 范围选择模式，不存在被选中的单一日期

        state.selectedDated = ''
      } else {
        state.formatValue = state.selectedDated
      }
      let now = new Date()
      let year, month
      if (state.year != -1 && state.month != -1) {
        year = state.year
        month = state.month
      } else {
        year = now.getFullYear()
        month = now.getMonth() + 1
      }
      let currenDate = new Date(year + '/' + month + '/1')
      let weekdays = WEEKDAYS_ZH
      switch (props.language) {
        case LANGUAGES.en:
          weekdays = WEEKDAYS_EN
          break
        case LANGUAGES.zh:
          weekdays = WEEKDAYS_ZH
          break
        default:
          weekdays = WEEKDAYS_ZH
          break
      }
      state.initFinished = true
      ;(state.currenDate = currenDate), (state.weekdays = weekdays as any)
      state.selectedClassName = selectedClassName
      refreshCalendar()
    })

    return {
      ...toRefs(state),
      onDayClick,
      showPicker,
      pre,
      next,
    }
  },
})
</script>

<style>
@import url('./calendar.css');
</style>
