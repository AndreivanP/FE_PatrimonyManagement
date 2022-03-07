import React, { Component } from "react";
import AssetDataService from "../../api/AssetDataService"
import AuthenticationService from '../../authentication/AuthenticationService'
import './Investment.css';
import { Formik, Field } from "formik";

class InvestmentFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: null,
            variableIncomeTotal: null,
            totalValueToBeInvested: null,
            variableIncome: null,
            fixedIncome: null,
            username: AuthenticationService.getLoggedInUserName(),
            token: AuthenticationService.getLoggedInToken(),
            variableIncomePercentage: 20
        }
        this.calcVariableIncome = this.calcVariableIncome.bind(this);
        this.calcFixedIncome = this.calcFixedIncome.bind(this);
    }

    componentDidMount() {
        AssetDataService.getCurrentTotal(this.state.username, this.state.token)
            .then(response => this.setState({
                total: response.data.current_total,
                variableIncomeTotal: response.data.variable_income_total,
            }));
    }

    calcVariableIncome(value) {
        let idealVariableInc = (this.state.total + parseFloat(value)) / 100 * this.state.variableIncomePercentage;
        if (typeof (value) == 'undefined' || value === "") {
            return 0;
        } else {
            if ((value + parseFloat(this.state.variableIncomeTotal)) < parseFloat(idealVariableInc)) {
                return value;
            } else {
                return parseFloat(idealVariableInc) - parseFloat(this.state.variableIncomeTotal);
            }
        }
    }

    calcFixedIncome(value) {
        if (typeof (value) == 'undefined' || value === "") {
            return 0;
        } else {
            return value - this.calcVariableIncome(value);
        }
    }

    onCancel() {
        window.history.back();
    }

    handleChange(evt, field) {
        this.setState({ [field]: evt.target.totalValueToBeInvested });
        this.setState()
    }

    render() {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        let { total, variableIncomeTotal, totalValueToBeInvested } = this.state;
        total = formatter.format(total);
        variableIncomeTotal = formatter.format(variableIncomeTotal);
        return (
            <Formik
                initialValues={{ total, variableIncomeTotal, totalValueToBeInvested }}
                validateOnChange={false}
                validateOnBlur={false}
                validate={this.validate}
                enableReinitialize={true}
            >
                {(props) => (
                    <form className="auth-wrapper">
                        <div className="auth-inner">
                            <div className="form-group">
                            <nav className="navbar navbar-custom">
                                <div className="row col-12 d-flex justify-content-center text-white">
                                <span className="h6">Ideal Variable Income Share is {this.state.variableIncomePercentage}%</span>
                                </div>
                            </nav>
                                <label>Total Patrimony</label>
                                <Field className="readOnlyField" type="text" name="total" readOnly />
                                <label>Variable Income Total</label>
                                <Field className="readOnlyField" type="text" name="variableIncomeTotal" readOnly />
                                <label>Value to be Invested</label>
                                <Field className="fieldCategA" type="number" pattern="[0-9]*" inputMode="numeric" name="valueToBeInvested" value={props.values.valueToBeInvested || ''} />
                                <label>You Should Invest in Variable Income</label>
                                <Field className="readOnlyField" type="text" name="investVarInc" value={formatter.format(this.calcVariableIncome(props.values.valueToBeInvested)) || ''} readOnly />
                                <label>You Should Invest in Fixed Income</label>
                                <Field className="readOnlyField" type="text" name="investFixInc" value={formatter.format(this.calcFixedIncome(props.values.valueToBeInvested)) || ''} readOnly />
                            </div>
                            <button className="btn btn-secondary btn-block" onClick={this.onCancel} type="button">Close</button>
                        </div>
                    </form>
                )}
            </Formik>

        );
    }
}

export default InvestmentFormComponent;
