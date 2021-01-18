import React, {Component} from 'react';

const apiPLN = 'https://api.exchangeratesapi.io/latest?base=PLN';
const apiEUR = 'https://api.exchangeratesapi.io/latest?base=EUR';


class Page extends Component {
    state = {
        currency :"",
        result:"",
        currencyValue1:"PLN",
        currencyValue2:"EUR",
        inputValue:"",

    }

    API = `https://api.exchangeratesapi.io/latest?base=${this.state.currencyValue1}`;



    handleCalc = () => {
        let pln = this.state.currency.rates.PLN;
        let eur = this.state.currency.rates.EUR;
        const inputValue = this.state.inputValue;
        
        if(this.state.currencyValue1 === "PLN"){
            let result = inputValue * eur;
            this.setState({
            result:result.toFixed(2),
        })
        }else{
            let result = inputValue * pln;
            this.setState({
            result:result.toFixed(2),
        })
        }

        // const result = inputValue * eur;

    
    }

    handleValueChange = (e) => {
        this.setState({
            inputValue:e.target.value,
        })
    }

    handleChange = (e) => {
        this.setState({
            currencyValue1:e.target.value,
            result:"",
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
            <div>
                
                <select onChange={this.handleChange}>
                    <option value="PLN">PLN</option>
                    <option value="EUR">EUR</option>
                </select>

                <input type="number" onChange={this.handleValueChange}/>
                <button onClick={this.handleCalc}>Ile to jest?</button>
                <h1>{this.state.result} {this.state.currencyValue1 !== "PLN" ? 'PLN':'EUR'}</h1>
            </div>
            
        )
    }
}

export default Page;