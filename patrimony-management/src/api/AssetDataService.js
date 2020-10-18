import axios from "axios"
import AuthenticationService from "../authentication/AuthenticationService";
import { API_URL } from "../Properties"

class AssetDataService {
    retrieveAllAssets(username, token) {        
        return axios.get(`${API_URL}/users/${username}/assets`, 
            {headers: {authorization: AuthenticationService.createJwtToken(token)}});
    }

    retrieveAsset(username, id, token) {        
        return axios.get(`${API_URL}/users/${username}/assets/${id}`, 
            {headers: {authorization: AuthenticationService.createJwtToken(token)}});
    }

    createAsset(username, asset, token) {
        return axios.post(`${API_URL}/users/${username}/assets`, asset,
        {headers: {authorization: AuthenticationService.createJwtToken(token)}});
    }

    deleteAsset(username, id, token) {
        return axios.delete(`${API_URL}/users/${username}/assets/${id}`,
         {headers: {authorization: AuthenticationService.createJwtToken(token)}});
    }

    updateAsset(username, id, asset, token) {
        return axios.put(`${API_URL}/users/${username}/assets/${id}`, asset,
        {headers: {authorization: AuthenticationService.createJwtToken(token)}});
        
    }

    getCurrentTotal(username, token) {
        return axios.get(`${API_URL}/users/${username}/assets/current-total`, 
        {headers: {authorization: AuthenticationService.createJwtToken(token)}});
    }
 
}

export default new AssetDataService();