export const state = () => {
    return {
      user: null,
      posts: [
          {
            user: ""
          }
      ]
    }
  }
  
  export const mutations = {
    SET_USER(state, user) {
      state.user = user 
    },
    ADD_POST(state, post) {
        state.posts.push(post)
      }
  }
  
  export const actions = {
    loginWithUserName({commit}, name) {
      commit("SET_USER",{ name })
      },
      addPost({state,commit}) {
        const post = {
          user: state.user.name
        }
        commit("ADD_POST", post)
      }
    }