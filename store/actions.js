export default{
    async login({commit},{email,password}){
        console.log(commit)
        try{
            if(email != "test@email" || password != 123456789){
                throw new Error("error!!!")
            }
            let data = {email: email,password: password}
            commit("AUTHED_USER", data )
        } catch (e) {
            throw e
        }
    }
}