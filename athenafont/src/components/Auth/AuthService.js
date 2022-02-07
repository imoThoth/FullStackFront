
class AuthService {
    registerSuccesfulLogin(username, password){
        sessionStorage.setItem('authenticated', username);
        console.log(this.registerSuccesfulLogin);
    }

    logout(){
        sessionStorage.removeItem('authenticated');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticated');
        if(user === null) return false
        return true;
    }

    getLoggedInUser(){
        let user =  sessionStorage.getItem('authenticated');
        if(user == null) return ''
        return user;
    }
}
 
export default new AuthService();