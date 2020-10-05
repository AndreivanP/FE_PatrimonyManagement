import React, { Component } from "react";
import AuthenticationService from '../../authentication/AuthenticationService'
import AssetDataService from '../../api/AssetDataService'

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
    }

    componentDidMount() {
        this.loadAssets();        
    }

    loadAssets() {
        let username = AuthenticationService.getLoggedInUserName();        
        let token = AuthenticationService.getLoggedInToken();        
        AssetDataService.retrieveAllAssets(username, token)
            .then(
                response => {
                    this.setState(
                        {assets : response.data}                       
                    )
                }
            )                
    }

    addAsset(id) {
        this.props.history.push(`/assets/new`);
    }

    render() {        
        return (        
            <div className="text-center">
                <h1>List Assets</h1>
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
                                            {/* <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td><button className="brn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="brn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td> */}
                                        </tr>                                        
                                )
                            }                            
                        </tbody>
                    </table>
                    <div className="text-center">
                        <button className="btn btn-success" onClick={this.addAsset}>Add New Todo</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListAssetComponent