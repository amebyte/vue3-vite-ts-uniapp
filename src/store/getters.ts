import { RootState } from '@/store'
export default {
  token: (state: RootState) => state.app.token,
}
