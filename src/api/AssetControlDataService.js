import axios from "axios"
import AuthenticationService from "../authentication/AuthenticationService";
import { API_URL } from "../Properties"

class AssetControlService {
    createAssetCurrentValue(username, token) {
        return axios.post(`${API_URL}/users/${username}/assets-control`, "",
        {headers: {authorization: AuthenticationService.createJwtToken(token)}});
    }

    async getAssetControlValueInterval(username, token, since, till) {
        const response = await axios.get(`${API_URL}/users/${username}/assets-control?since=${since}&till=${till}`,
        {headers: {authorization: AuthenticationService.createJwtToken(token)}});
        return response
    }
}

export default new AssetControlService();