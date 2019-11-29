import Vuex from "vuex"
import mutations from "./mutations"
import action from "./action"

const store = () => {
    return new Vuex.Store({
        state:{
            authUser:null
        },
        mutations,
        action
    })
}
export default store