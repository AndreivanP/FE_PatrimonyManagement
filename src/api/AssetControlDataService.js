import axios from "axios"
import AuthenticationService from "../authentication/AuthenticationService";
import { API_URL } from "../Properties"

class AssetControlService {
    createAssetCurrentValue(username, token) {
        return axios.post(`${API_URL}/users/${username}/assets-control`, "",
        {headers: {authorization: AuthenticationService.createJwtToken(token)}});
    }
}

export default new AssetControlService();