import React, { Component } from "react";
import AssetControlDataService from "../../api/AssetControlDataService"
import AssetDataService from "../../api/AssetDataService"
import AuthenticationService from '../../authentication/AuthenticationService'
import moment from 'moment'

class AssetFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: '',
      date: moment(new Date()).format('YYYY-MM-DD'),
      initial_value: '',
      company: '',
      interest_rate: '',
      is_active: '',
      current_value: '',
      is_variable_income: '',
      username: AuthenticationService.getLoggedInUserName(),
      token: AuthenticationService.getLoggedInToken(),
      expiryDate: '',
      old_current_value: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "new") {
      return;
    }

    AssetDataService.retrieveAsset(this.state.username, this.state.id, this.state.token)
      .then(response => this.setState({
        name: response.data.name,
        date: response.data.date,
        initial_value: response.data.initial_value,
        company: response.data.company,
        interest_rate: response.data.interest_rate,
        is_active: response.data.is_active,
        current_value: response.data.current_value,
        is_variable_income: response.data.is_variable_income,
        expiryDate: response.data.expiryDate,
        old_current_value: response.data.current_value
      }));
  }

  onSubmit(event) {
    let asset = {
      name: this.state.name,
      date: this.state.date,
      initial_value: this.state.initial_value,
      company: this.state.company,
      interest_rate: this.state.interest_rate,
      is_active: this.state.is_active,
      current_value: this.state.current_value,
      is_variable_income: this.state.is_variable_income,
      expiryDate: this.state.expiryDate
    }
    if (this.state.id === "new") {
      AssetDataService.createAsset(this.state.username, asset, this.state.token)
        .then(() => AssetControlDataService.createAssetCurrentValue(this.state.username, this.state.token)
          .then(this.props.history.push('/assets')))
    } else {
      asset.id = this.state.id
      if (asset.current_value !== this.state.old_current_value) {
        AssetDataService.updateAsset(this.state.username, this.state.id, asset, this.state.token)
          .then(() => AssetControlDataService.createAssetCurrentValue(this.state.username, this.state.token)
            .then(this.props.history.push('/assets')));
      } else {
        AssetDataService.updateAsset(this.state.username, this.state.id, asset, this.state.token)
          .then(() => this.props.history.push('/assets'));
      }
    }
    event.preventDefault();
  }

  onCancel() {
    window.history.back();
  }

  handleChange(evt, field) {
    this.setState({ [field]: evt.target.value });
  }

  handleChangeCheckboxes(evt, field) {
    this.setState({ [field]: evt.target.checked });
  }

  render() {
    return (
          <div className="auth-wrapper">
            <div className="auth-inner">
              <div className="form-group">
                <label>Asset Name</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={(event) => this.handleChange(event, "name")} required />
                <label>Broker</label>
                <input type="text" className="form-control" name="broker" value={this.state.company} onChange={(event) => this.handleChange(event, "company")} />
                <label>Start Date</label>
                <input type="date" className="form-control" name="date" value={moment(this.state.date).format('YYYY-MM-DD')} onChange={(event) => this.handleChange(event, "date")} required />
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" name="is_active"
                    value={this.state.is_active} onChange={(event) => this.handleChangeCheckboxes(event, "is_active")}
                    checked={this.state.is_active} />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">Is Active?</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" name="is_variable_income"
                    value={this.state.is_variable_income} onChange={(event) => this.handleChangeCheckboxes(event, "is_variable_income")}
                    checked={this.state.is_variable_income} />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">Is Variable Income?</label>
                </div>
                <label>Initial Value</label>
                <input type="number" className="form-control" name="initial_value" value={this.state.initial_value} onChange={(event) => this.handleChange(event, "initial_value")} required />
                <label>Interest Rate</label>
                <input type="text" className="form-control" name="interest_rate" value={this.state.interest_rate} onChange={(event) => this.handleChange(event, "interest_rate")} />
                <label>Current Value</label>
                <input type="number" className="form-control" name="current_value" value={this.state.current_value} onChange={(event) => this.handleChange(event, "current_value")} required />
                <label>Expiry Date</label>
                <input type="date" className="form-control" name="expiryDate" value={moment(this.state.expiryDate).format('YYYY-MM-DD')} onChange={(event) => this.handleChange(event, "expiryDate")} />
              </div>
              <button className="btn btn-primary btn-block" onClick={this.onSubmit} type="submit" value="Submit" >Save</button>
              <button className="btn btn-secondary btn-block" onClick={this.onCancel} type="button">Cancel</button>
            </div>
          </div>
    );
  }
}

export default AssetFormComponent;
