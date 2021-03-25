import React from 'react';
import SearchBar from "./SearchBar"
import Info from "./Info"
import "./style.css"

class App extends React.Component{
    constructor(){
        super()
        this.state={
            value:"",
            data:"",
            selectedCountry:"",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.covid19api.com/summary")         // API
            .then(response=>response.json())
            .then(response=>this.setState({data:response.Countries}))

    }
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault()
        Array.from(this.state.data).forEach(element => {
            if(element.Country === this.state.value){
                this.setState({selectedCountry:element})
            }
        }
        );
    }
    render(){
        return(
        <div>
            <h1 className="title">Covid-19 Information</h1>  
            <SearchBar handleSubmit={this.handleSubmit} value={this.state.value} handleChange={this.handleChange}/>
            <Info selectedCountry={this.state.selectedCountry}/>
        </div>  
    )}
}
export default App