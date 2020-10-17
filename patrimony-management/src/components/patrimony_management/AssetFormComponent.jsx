import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthenticationService from "../../authentication/AuthenticationService"
import AssetDataService from "../../api/AssetDataService"
import moment from 'moment'

let username = AuthenticationService.getLoggedInUserName();
let token = AuthenticationService.getLoggedInToken();

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
      
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "new") {
      return;
    }
    AssetDataService.retrieveAsset(username, this.state.id, token)
      .then(response => this.setState({
            name: response.data.name,
            date: moment(response.data.date).format('YYYY-MM-DD'),
            initial_value: response.data.initial_value,
            company: response.data.company,
            interest_rate: response.data.interest_rate,
            is_active: response.data.is_active,
            current_value: response.data.current_value,
            is_variable_income: response.data.is_variable_income
          }));
  }

  onSubmit(values) {      
    let asset = {
        name: values.name,
        date: values.date,
        initial_value: values.initial_value,
        company: values.company,
        interest_rate: values.interest_rate,
        is_active: values.is_active,
        current_value: values.current_value,
        is_variable_income: values.is_variable_income
    }
    if(this.state.id === "new") { 
      AssetDataService.createAsset(username, asset, token)
            .then(() => this.props.history.push('/assets'));
    } else {
      asset.id = this.state.id              
      AssetDataService.updateAsset(username, this.state.id, asset, token)
            .then(() => this.props.history.push('/assets'));
    }
}

  onCancel() {
    window.history.back();
  }

  render() {
    let {name, date, initial_value, company, interest_rate, is_active, current_value, is_variable_income} = this.state;

    return (
      <div className="text-center">
        <h1>Asset</h1>
        <div className="asset">
          <Formik
            initialValues={{name, date, initial_value, company, interest_rate, is_active, current_value, is_variable_income}}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <fieldset className="form-group">
                  <label>Name:</label>
                  <Field className="form-control" type="text" name="name" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Date:</label>
                  <Field
                    className="fieldCategA"
                    type="date"
                    name="date"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Initial Value:</label>
                  <Field
                    className="fieldCategA"
                    type="text"
                    name="initial_value"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Interest Rate:</label>
                  <Field
                    className="fieldCategB"
                    type="text"
                    name="interest_rate"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Is Active?</label>
                  <Field
                    className="checkbox"
                    type="checkbox"
                    name="is_active"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Is Variable Income?</label>
                  <Field
                    className="checkbox"
                    type="checkbox"
                    name="is_variable_income"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Current Value:</label>
                  <Field
                    className="fieldCategA"
                    type="text"
                    name="current_value"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Company:</label>
                  <Field className="form-control" type="text" name="company" />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
                <button className="btn btn-warning" onClick={this.onCancel} type="button">
                  Cancel
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default AssetFormComponent;
