import axios from "axios"
import AuthenticationService from "../authentication/AuthenticationService";
import { API_URL } from "../Properties"

class AssetService {
    retrieveAllAssets(username, token) {        
        return axios.get(`${API_URL}/users/${username}/assets`, 
            {headers: {authorization: AuthenticationService.createJwtToken(token)}});
    }
 
}

export default new AssetService();