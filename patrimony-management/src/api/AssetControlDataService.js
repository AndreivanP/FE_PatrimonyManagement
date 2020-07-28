import axios from "axios"
import AuthenticationService from "../authentication/AuthenticationService";
import { API_URL } from "../Properties"

class AssetControlService {
    retrieveAssetControlByAsset(username, password, asset_id) {        
        return axios.get(`${API_URL}/assets-control/asset/${asset_id}`, 
            {headers: {authorization: AuthenticationService.createBasicAuthToken(username, password)}});
    }
 
}

export default new AssetControlService();