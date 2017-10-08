import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{

    constructor(props){
        super(props);

    }

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        return(
            <tr key={name}>
                <td>
                    {name}
                </td>
                <td>
                    <Chart height={120} width={180} color="orange" data={temps} unit="K" />
                </td>
                <td>
                    <Chart height={120} width={180} color="green" data={pressures} unit="hPa" />
                </td>
                <td>
                    <Chart height={120} width={180} color="grey" data={humidities} unit="%" />
                </td>
            </tr>
        );
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

}

function mapStateToProps(state){
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
