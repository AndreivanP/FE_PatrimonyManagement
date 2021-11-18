import React, { Component } from "react";
import AuthenticationService from "../../authentication/AuthenticationService"
import AssetDataService from "../../api/AssetDataService"
import { Line } from 'react-chartjs-2';
import './Dashboard.css';
import axios from "axios"
import { API_URL } from "../../Properties"


var getDaysArray = function(start, end) {
    for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+90)){
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
            // datesInterval: ['2017/01/01', '2017/04/01', '2017/07/01', '2017/10/01',
            //     '2018/01/01', '2018/04/01', '2018/07/01', '2018/10/01',
            //     '2019/01/01', '2019/04/01', '2019/07/01', '2019/10/01',
            //     '2020/01/01', '2020/04/01', '2020/07/01', '2020/10/01',
            //     '2021/01/01', '2021/04/01', '2021/07/01', '2021/10/01'],
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

            var daylist = getDaysArray(new Date("2017-01-01"), new Date());
            console.log("xablau "+daylist)            
        

        for (let i = 0; i < this.state.datesInterval.length; i++) {
            if (i !== this.state.datesInterval.length - 1) {
                const response = await axios.get(`${API_URL}/users/${this.state.username}/assets-control?since=${this.state.datesInterval[i]} 00:00:00&till=${this.state.datesInterval[i + 1]} 23:59:00`,
                    { headers: { authorization: AuthenticationService.createJwtToken(this.state.token) } });
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
            } else {
                const response = await axios.get(`${API_URL}/users/${this.state.username}/assets-control?since=${this.state.datesInterval[i]} 00:00:00&till=${new Date().toLocaleDateString('en-ZA')} 23:59:00`,
                    { headers: { authorization: AuthenticationService.createJwtToken(this.state.token) } });
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
    }

    render() {
        const data = {
            labels: this.state.datesInterval,
            datasets: [
                {
                    label: 'Total Patrimony in R$',
                    data: this.state.chartData,
                    fill: true,
                    backgroundColor: "#5c80a1",
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