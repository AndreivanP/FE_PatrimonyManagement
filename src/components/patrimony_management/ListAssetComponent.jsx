import React, { Component } from "react";
import AuthenticationService from '../../authentication/AuthenticationService'
import AssetDataService from '../../api/AssetDataService'
import AssetControlDataService from "../../api/AssetControlDataService"

class ListAssetComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            assets: [],
            message: null,
            assetControl: null,
            username: AuthenticationService.getLoggedInUserName(),
            token: AuthenticationService.getLoggedInToken()
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
        AssetDataService.retrieveAllAssets(this.state.username, this.state.token)
            .then(
                response => {
                    this.setState(
                        {assets : response.data}                       
                    )
                }
            )                
    }

    addAsset() {
        this.props.history.push(`/users/${this.state.username}/assets/new`);
    }

    updateAsset(id) {
        this.props.history.push(`/users/${this.state.username}/assets/${id}`);
    }

    deleteAsset(id) {
        AssetDataService.deleteAsset(this.state.username, id, this.state.token)
        .then(
            response => {
                AssetControlDataService.createAssetCurrentValue(this.state.username, this.state.token);
                this.setState({message : `Successfully deleted asset id ${id}`});
                this.loadAssets();
            }
        )  
    }

    render() {        
        return (        
            <div className="text-center">
                <h1>Manage Assets
                    <div className="text-right">
                        <button className="btn btn-success" onClick={this.addAsset}>Add New Asset</button>
                    </div>
                </h1>
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div >
                    <table className="table">
                        <thead>
                            <tr>                                
                                <th data-testid="column-name">Name</th>
                                <th data-testid="column-initial-value">Initial Value</th>
                                <th data-testid="column-current-value">Current Value</th>
                                <th data-testid="column-company">Company</th>
                            </tr>
                        </thead>                        
                        <tbody>                            
                            {
                                this.state.assets.map(                                    
                                    asset =>
                                        <tr key={asset.id}>
                                            <td data-testid="name">{asset.name}</td>
                                            <td data-testid="initial-value">{asset.initial_value}</td>
                                            <td data-testid="current-value">{asset.current_value}</td>
                                            <td data-testid="company">{asset.company}</td>
                                            <td data-testid="btn-update"><button className="brn btn-warning" onClick={() => this.updateAsset(asset.id)}>Update</button></td>
                                            <td data-testid="btn-delete"><button className="brn btn-danger" onClick={() => this.deleteAsset(asset.id)}>Delete</button></td>
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