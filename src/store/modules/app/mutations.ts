import { MutationTree } from 'vuex'
import { AppState } from './state'
import { AppMutationTypes } from './mutation-types'

export type Mutations<S = AppState> = {
  [AppMutationTypes.SET_TOKEN](state: S, token: string): void
}
export const mutations: MutationTree<AppState> & Mutations = {
  [AppMutationTypes.SET_TOKEN](state: AppState, token: string) {
    state.token = token
  },
}
