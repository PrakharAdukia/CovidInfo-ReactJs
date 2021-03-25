import React from 'react';

function Info(props){
    return(
    <div className="info">
        <p>Status in: {props.selectedCountry.Country}</p>
        <hr/>
        <p>Confirmed - {props.selectedCountry.TotalConfirmed}</p>
        <p>Deaths - {props.selectedCountry.TotalDeaths}</p>
        <p>Recovered - {props.selectedCountry.TotalRecovered}</p>
    </div>)
}
export default Info