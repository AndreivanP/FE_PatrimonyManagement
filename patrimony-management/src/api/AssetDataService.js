import axios from "axios"
import AuthenticationService from "../authentication/AuthenticationService";
import { API_URL } from "../Properties"

class AssetDataService {
    retrieveAllAssets(username, token) {        
        return axios.get(`${API_URL}/users/${username}/assets`, 
            {headers: {authorization: AuthenticationService.createJwtToken(token)}});
    }

    createAsset(username, asset, token) {
        return axios.post(`${API_URL}/users/${username}/assets`, asset,
        {headers: {authorization: AuthenticationService.createJwtToken(token)}});
    }
 
}

export default new AssetDataService();