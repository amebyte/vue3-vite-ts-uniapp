import { computed } from 'vue'
import { mapState, useStore } from 'vuex'

export const useMapState = (getKeys) => {
  const store = useStore()

  const storeState = {}
  const storeFns = mapState(getKeys)

  Object.keys(storeFns).forEach((fnKeys) => {
    const fn = storeFns[fnKeys].bind({ $store: store })
    storeState[fnKeys] = computed(fn)
  })

  return storeState
}
