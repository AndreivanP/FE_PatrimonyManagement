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
            labels: ['Jan/2017', 'Apr/2017', 'Jul/2017', 'Oct/2017',
                     'Jan/2018', 'Apr/2018', 'Jul/2018', 'Oct/2018',
                     'Jan/2019', 'Apr/2019', 'Jul/2019', 'Oct/2019',
                     'Jan/2020', 'Apr/2020', 'Jul/2020', 'Oct/2020',
                     'Jan/2021', 'Apr/2021', 'Jul/2021', 'Oct/2021'],
            datasets: [
                {
                    label: 'Total Patrimony in R$',
                    data: [1622, 1079, 3777, 5656,
                           7872, 8534, 6453, 7453, 
                           9234, 10987, 11098, 11298,
                           12000, 12324, 11888, 12111,
                           12300, 12724, 12888, 12911],
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
                            size: 12
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