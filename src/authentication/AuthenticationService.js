import axios from "axios";
import { API_URL } from "../Properties"

const USER_NAME_SESSION_ATTRIBUTE = 'authenticatedUser'; 
const PASSWORD_SESSION_ATTRIBUTE = 'passwordUser'; 
const TOKEN_SESSION_ATTRIBUTE = 'tokenUser';

class AuthenticationService {   

    executeJwtAuthenticationService(username, password) {
        console.log('Auth')
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })            
    }

    registerSuccessfulLoginJwt(username, token) {
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE, username);                
        localStorage.setItem(TOKEN_SESSION_ATTRIBUTE, token);
        this.setupAxiosInterceptors(this.createJwtToken(token));
    }

    createJwtToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE);
        localStorage.removeItem(PASSWORD_SESSION_ATTRIBUTE);
        localStorage.removeItem(TOKEN_SESSION_ATTRIBUTE);
    }

    isUserLoggedIn() {        
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE);        
        if(user === null) {
            return false
        } else {
            return true
        }        
    }

    getLoggedInUserName() {        
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE);        
        if(user === null) {
            return ""
        } else {
            return user
        }        
    }

    getLoggedInToken() {        
        let token = localStorage.getItem(TOKEN_SESSION_ATTRIBUTE);        
        if(token === null) {
            return ""
        } else {
            return token
        }        
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();