import React, { Component } from "react";
import AuthenticationService from "../../authentication/AuthenticationService"
import AssetDataService from "../../api/AssetDataService"
import { Line } from 'react-chartjs-2';
import './Dashboard.css';
import axios from "axios"
import { API_URL } from "../../Properties"


var getDaysArray = function (start, end) {
    for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 90)) {
        arr.push(new Date(dt).toLocaleDateString('en-ZA'));
    }
    arr.push(new Date().toLocaleDateString('en-ZA'));
    return arr;
};

class DashboardComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            total: '',
            variableIncomeTotal: '',
            variableIncomePercentage: '',
            chartData: [],
            datesInterval: getDaysArray(new Date("2017-01-01"), new Date()),
            username: AuthenticationService.getLoggedInUserName(),
            token: AuthenticationService.getLoggedInToken()
        }
    }

    async componentDidMount() {
        AssetDataService.getCurrentTotal(this.state.username, this.state.token)
            .then(response => this.setState({
                total: response.data.current_total,
                variableIncomeTotal: response.data.variable_income_total,
                variableIncomePercentage: response.data.variable_income_percent
            }));

        for (let i = 0; i < this.state.datesInterval.length; i++) {
            let response = '';
            if (i !== this.state.datesInterval.length - 1) {
                response = await axios.get(`${API_URL}/users/${this.state.username}/assets-control?since=${this.state.datesInterval[i]} 00:00:00&till=${this.state.datesInterval[i + 1]} 23:59:00`,
                    { headers: { authorization: AuthenticationService.createJwtToken(this.state.token) } });
            } else {
                response = await axios.get(`${API_URL}/users/${this.state.username}/assets-control?since=${this.state.datesInterval[i]} 00:00:00&till=${new Date().toLocaleDateString('en-ZA')} 23:59:00`,
                    { headers: { authorization: AuthenticationService.createJwtToken(this.state.token) } });
            }
            // eslint-disable-next-line
            if (response.data != '') {
                this.setState(prevState => ({
                    chartData: [...prevState.chartData, response.data[0].currentTotalValue]
                }))
            } else {
                let lastValue = this.state.chartData.at(-1);
                this.setState(prevState => ({
                    chartData: [...prevState.chartData, lastValue]
                }))
            }
        }
    }

    render() {
        const data = {
            labels: this.state.datesInterval,
            datasets: [
                {
                    label: 'Total Patrimony in R$',
                    data: this.state.chartData,
                    fill: true,
                    backgroundColor: "#6fa2d3",
                    pointBorderColor: "#0077ff",
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
                        color: "black",
                        font: {
                            size: 18
                        }
                    },
                    grids: {
                        color: "#000000"
                    }
                },
                x: {
                    ticks: {
                        color: "black",
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
                <div className="title">Equity Evolution</div>
                <Line data={data} options={options} ></Line>
            </h1>

        )
    }
}

export default DashboardComponent