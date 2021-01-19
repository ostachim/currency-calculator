import React, {Component} from 'react';
import '../styles/Page.css'

// const apiPLN = 'https://api.exchangeratesapi.io/latest?base=PLN';
// const apiEUR = 'https://api.exchangeratesapi.io/latest?base=EUR';


class Page extends Component {
    state = {
        currency :"",
        result:"",
        currencyValue1:"PLN",
        currencyValue2:"EUR",
        inputValue:"",
        inputValueAsync:"",

    }

    API = `https://api.exchangeratesapi.io/latest?base=${this.state.currencyValue1}`;



    handleCalc = () => {
        const {inputValue,currencyValue2} = this.state;

        const currency2 = currencyValue2;
        const currency = this.state.currency.rates[currency2];

        const result = currency * inputValue;

        this.setState({
            result: result.toFixed(2),
            inputValueAsync:inputValue,

            
        })
        
    
    }

    handleValueChange = (e) => {
        this.setState({
            inputValue:e.target.value,
        })
    }

    handleChangeValue1 = (e) => {
        this.setState({
            currencyValue1:e.target.value,
            result:"",
            inputValueAsync:"",
        })
    }
    handleChangeValue2 = (e) => {
        this.setState({
            currencyValue2:e.target.value,
            result:"",
            inputValueAsync:"",
        })
    }

    componentDidMount(){
        fetch(this.API)
        .then(response => response.json())
        .then(response => {
            this.setState({
                currency:response,
            })
        })

        
    }

    componentDidUpdate(){
        const api = `https://api.exchangeratesapi.io/latest?base=${this.state.currencyValue1}`;
        fetch(api)
        .then(response => response.json())
        .then(response => {
            this.setState({
                currency:response,
            })
        }) 
    }

    


    render(){
        return(
            <div className="converter">
                <div className="form">
                    <label>
                        Amount
                    </label>
                    <input type="number" onChange={this.handleValueChange}/>
                    <label>
                        From
                    </label>
                    <select onChange={this.handleChangeValue1}>
                        <option value="PLN">PLN</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="USD">USD</option>
                        <option value="CHF">CHF</option>
                    </select>
                    <label>
                        To
                    </label>
                    <select onChange={this.handleChangeValue2} defaultValue="EUR">
                        <option value="PLN">PLN</option>
                        <option key="EUR" value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="USD">USD</option>
                        <option value="CHF">CHF</option>
                    </select>
                    <button onClick={this.handleCalc}>Convert</button>
                </div>
                <div className="resultTable">
                    <h1>{this.state.inputValueAsync} {this.state.result !=="" ? this.state.currencyValue1:null} {this.state.result !=="" ? " = ":null} {this.state.result} {this.state.result !=="" ? this.state.currencyValue2:null}</h1>
                </div>
                <p>updated in {this.state.currency.date}</p>
            </div>
            
        )
    }
}

export default Page;