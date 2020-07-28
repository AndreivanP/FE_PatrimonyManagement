import axios from "axios";
import { API_URL } from "../Properties"

const USER_NAME_SESSION_ATTRIBUTE = 'authenticatedUser'; 
const PASSWORD_SESSION_ATTRIBUTE = 'passwordUser'; 
const TOKEN_SESSION_ATTRIBUTE = 'tokenUser';

class AuthenticationService {   

 
    executeJwtAuthenticationService(username, password) {
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })            
    }

    registerSuccessfulLoginJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE, username);                
        sessionStorage.setItem(TOKEN_SESSION_ATTRIBUTE, token);
        this.setupAxiosInterceptors(this.createJwtToken(token));
    }

    createJwtToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE);
        sessionStorage.removeItem(PASSWORD_SESSION_ATTRIBUTE);
        sessionStorage.removeItem(TOKEN_SESSION_ATTRIBUTE);
    }

    isUserLoggedIn() {        
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE);        
        if(user === null) {
            return false
        } else {
            return true
        }        
    }

    getLoggedInUserName() {        
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE);        
        if(user === null) {
            return ""
        } else {
            return user
        }        
    }

    getLoggedInToken() {        
        let token = sessionStorage.getItem(TOKEN_SESSION_ATTRIBUTE);        
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