import { createStore } from 'vuex'
import { store as app, AppState, AppStore } from '@/store/modules/app'
import getters from './getters'
export interface RootState {
  app: AppState
}
export type Store = AppStore<Pick<RootState, 'app'>>

export const store = createStore<RootState>({
  modules: {
    app,
  },
  getters,
})

export function useStore(): Store {
  return store as Store
}
