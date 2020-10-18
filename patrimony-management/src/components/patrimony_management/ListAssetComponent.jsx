import React, { Component } from "react";
import AuthenticationService from '../../authentication/AuthenticationService'
import AssetDataService from '../../api/AssetDataService'
import AssetControlDataService from "../../api/AssetControlDataService"

let username = AuthenticationService.getLoggedInUserName();        
let token = AuthenticationService.getLoggedInToken(); 

class ListAssetComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            assets: [],
            message: null,
            assetControl: null,            
        }
        this.loadAssets = this.loadAssets.bind(this);
        this.addAsset = this.addAsset.bind(this);       
        this.updateAsset = this.updateAsset.bind(this);     
        this.deleteAsset = this.deleteAsset.bind(this);      
    }

    componentDidMount() {
        this.loadAssets();        
    }

    loadAssets() {
               AssetDataService.retrieveAllAssets(username, token)
            .then(
                response => {
                    this.setState(
                        {assets : response.data}                       
                    )
                }
            )                
    }

    addAsset() {
        this.props.history.push(`/users/${username}/assets/new`);
    }

    updateAsset(id) {
        this.props.history.push(`/users/${username}/assets/${id}`);
    }

    deleteAsset(id) {
        AssetDataService.deleteAsset(username, id, token)
        .then(
            response => {
                AssetControlDataService.createAssetCurrentValue(username, token);
                this.setState({message : `Successfully deleted asset id ${id}`});
                this.loadAssets();
            }
        )
        
    }

    render() {        
        return (        
            <div className="text-center">
                <h1>Your Assets
                    <div className="text-right">
                        <button className="btn btn-success" onClick={this.addAsset}>Add New Asset</button>
                    </div>
                </h1>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div >
                    <table className="table">
                        <thead>
                            <tr>                                
                                <th>Name</th>                                
                                <th>Initial Value</th>                                
                                <th>Current Value</th>
                                <th>Company</th>
                            </tr>
                        </thead>                        
                        <tbody>                            
                            {
                                this.state.assets.map(                                    
                                    asset =>
                                        <tr key={asset.id}>                                            
                                            <td>{asset.name}</td>
                                            <td>{asset.initial_value}</td>
                                            <td>{asset.current_value}</td>
                                            <td>{asset.company}</td>
                                            <td><button className="brn btn-warning" onClick={() => this.updateAsset(asset.id)}>Update</button></td>
                                            <td><button className="brn btn-danger" onClick={() => this.deleteAsset(asset.id)}>Delete</button></td>
                                        </tr>                                        
                                )
                            }                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListAssetComponent