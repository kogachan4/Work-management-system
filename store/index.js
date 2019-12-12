 import Vuex from "vuex"
 import mutations from "./mutations"
 import action from "./actions"

export const state = () => {
  return new Vuex.Store({
    state: {
      authUser: null
    },
    mutations,
    actions
  })
}
export default store
