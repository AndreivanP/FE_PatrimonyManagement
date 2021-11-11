import React, { Component } from "react";
import AuthenticationService from "../../authentication/AuthenticationService"
import AssetDataService from "../../api/AssetDataService"
import { Line } from 'react-chartjs-2';
import './Dashboard.css';

class DashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: '',
            variableIncomeTotal: '',
            variableIncomePercentage: '',
            username: AuthenticationService.getLoggedInUserName(),
            token: AuthenticationService.getLoggedInToken()
        }

    }


    componentDidMount() {
        AssetDataService.getCurrentTotal(this.state.username, this.state.token)
            .then(response => this.setState({
                total: response.data.current_total,
                variableIncomeTotal: response.data.variable_income_total,
                variableIncomePercentage: response.data.variable_income_percent
            }));
    }

    render() {
        const data = {
            labels: ['Jan/2017', 'Mar/2017', 'May/2017', 'Jul/2017', 'Oct/2017',
                     'Jan/2018', 'Mar/2018', 'May/2018', 'Jul/2018', 'Oct/2018' ],
            datasets: [
                {
                    label: 'Patrimony',
                    data: [1622, 1079, 3777, 5656, 7872, 8534, 6453, 7453, 9234, 10987],
                    fill: true,
                    backgroundColor: "#2e4355",
                    pointBorderColor: "#8884d8",
                    pointBorderWidth: 5,
                    pointRadius: 5,
                    tension: 0.4
                },
            ],
        };

        const options = {
            plugins: {
                legend: {
                    display: false
                }
            },
            layout: {
                padding: {
                    bottom: 100 
                }
            },
            scales: {
                y: {
                    ticks: {
                        color: "white",
                        font: {
                            size: 18
                        }
                    },
                    grids: {
                        color: "#243240"
                    }
                },
                x: {
                    ticks: {
                        color: "white",
                        font: {
                            size: 18
                        }
                    }
                }
            }
        };


        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        })
        let { total } = this.state;
        let { variableIncomeTotal } = this.state;
        let { variableIncomePercentage } = this.state;
        total = formatter.format(total);
        variableIncomeTotal = formatter.format(variableIncomeTotal);
        return (
            <h1>
                <div className="total" >
                    Your Total Patrimony is {total}
                </div>
                <div className="variableIncTotal" >
                    Your Variable Income Total is {variableIncomeTotal}
                </div>
                <div className="percentageIncTotal" >
                    Your Variable Income Percentage is {variableIncomePercentage} %
                </div>
                <h2>Equity Evolution</h2>
                <Line data={data} options={options} ></Line>
            </h1>

        )
    }

}

export default DashboardComponent