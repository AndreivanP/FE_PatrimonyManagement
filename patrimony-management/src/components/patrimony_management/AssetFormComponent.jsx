import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

class AssetFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      name: '',
      date: '',
      initialValue: '',
      company: '',
      interest_rate: '',
      is_active: '',
      currentValue: '',
      is_variable_income: '',
      
    };
  }

  componentDidMount() {
    if (this.state.id === "new") {
      return;
    }
  }

  onCancel() {
    window.history.back();
  }

  render() {
    let {name, date, initialValue, company, interest_rate, is_active, currentValue, is_variable_income} = this.state;

    return (
      <div className="text-center">
        <h1>Asset</h1>
        <div className="asset">
          <Formik
            initialValues={{name, date, initialValue, company, interest_rate, is_active, currentValue, is_variable_income}}
            onSubmit={this.onSubmit}
            validateOnChange={false}
            validateOnBlur={false}
            validate={this.validate}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <fieldset className="form-group">
                  <label>Name</label>
                  <Field className="form-control" type="text" name="name" />
                </fieldset>
                <fieldset className="form-group">
                  <label>Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="date"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Initial Value</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="initialValue"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Interest Rate</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="interestRate"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Is Active?</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="isActive"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Is Variable Income?</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="isVariableIncome"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Current Value</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="currentValue"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <label>Company</label>
                  <Field className="form-control" type="text" name="company" />
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
                <button className="btn btn-warning" onClick={this.onCancel}>
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
