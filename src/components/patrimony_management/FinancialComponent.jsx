import React, { Component } from "react";
import AuthenticationService from '../../authentication/AuthenticationService'
import AssetDataService from '../../api/AssetDataService'
import { Formik, Form, Field } from "formik";

class ListAssetComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total : null,
            variableIncomeTotal : null,
            totalValueToBeInvested : null,
            username: AuthenticationService.getLoggedInUserName(),
            token: AuthenticationService.getLoggedInToken()
        }
        this.calcVariableIncome = this.calcVariableIncome.bind(this);
        this.calcFixedIncome = this.calcFixedIncome.bind(this);
    }

    componentDidMount() {
        AssetDataService.getCurrentTotal(this.state.username, this.state.token)
        .then(response => this.setState({
            total : response.data.current_total,
            variableIncomeTotal : response.data.variable_income_total,
        }));          
    }

    calcVariableIncome(value) {
        let idealVariableInc = (this.state.total + parseFloat(value)) / 100 * 20;
        if (typeof(value) == 'undefined'  || value === "") {
            return 0;
        } else {
            if((value + parseFloat(this.state.variableIncomeTotal)) < parseFloat(idealVariableInc)){
                return value;
            } else {
                return parseFloat(idealVariableInc) - parseFloat(this.state.variableIncomeTotal);
            } 
        } 
    }

    calcFixedIncome(value) {
        if (typeof(value) == 'undefined' || value === "") {
            return 0;
        } else {
            return value - this.calcVariableIncome(value);
        }
    }

    render() {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
          })
        let {total, variableIncomeTotal, totalValueToBeInvested} = this.state;
        total = formatter.format(total);
        variableIncomeTotal = formatter.format(variableIncomeTotal);
    
        return (
          <div className="text-center">
            <div className="asset">
              <Formik
                initialValues={{total, variableIncomeTotal, totalValueToBeInvested}}
                validateOnChange={false}
                validateOnBlur={false}
                validate={this.validate}
                enableReinitialize={true}
              >
                {(props) => (
                  <Form>
                    <fieldset className="form-group">
                      <label>Total Patrimony:</label>
                      <Field className="readOnlyField" type="text" name="total" readOnly/>
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Variable Income Total:</label>
                      <Field className="readOnlyField" type="text" name="variableIncomeTotal" readOnly/>
                    </fieldset>
                    <fieldset className="form-group">
                      <label>Value to be Invested:</label>
                      <Field className="fieldCategA" type="text" name="valueToBeInvested" value={props.values.valueToBeInvested || ''}/> 
                    </fieldset>
                    <fieldset className="form-group">
                      <label>You Should Invest in Variable Income:</label>
                      <Field className="readOnlyField" type="text" name="investVarInc" value={formatter.format(this.calcVariableIncome(props.values.valueToBeInvested)) || ''} readOnly/>
                    </fieldset>
                    <fieldset className="form-group">
                      <label>You Should Invest in Fixed Income:</label>
                      <Field className="readOnlyField" type="text" name="investFixInc" value={formatter.format(this.calcFixedIncome(props.values.valueToBeInvested)) || ''} readOnly/>
                    </fieldset>
                  </Form>
                ) }
              </Formik>
            </div>
          </div>
        );
      }
}

export default ListAssetComponent
