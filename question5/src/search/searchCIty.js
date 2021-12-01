import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
const idUrl = "https://www.metaweather.com/api/location/search/?query="
const forecastUrl = "https://www.metaweather.com/api/location/"
export default class SearchCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            noResult: false
        }


    }
    updateCities(e) {
        axios.get(idUrl + e.target.value).then(res => {
            let ids = []
            res.data.map(city => {
                ids.push({
                    name: city.title,
                    id: city.woeid

                })
            })
            ids.map(i => {
                axios.get(forecastUrl + i.id).then(res1 => {
                    res1.data.title = i.name
                    this.state.cities.push(res1.data)

                    this.setState({
                        cities: this.state.cities
                    })
                }).catch(err => console.log(err))
            })
            if (res.data.length == 0) {
                this.setState({
                    noResult: true
                })
            }


        }).catch(err => console.log(err))
    }

    searchCitiesList(e) {
        // run --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp to Avoid CORS

        // if user hit enter update the cities list

        if (e.key === "Enter" && e.target.value) {

            this.setState({
                noResult: false,
                cities: []
            }, this.updateCities(e))

        }
    }

    render() {
        let { cities, noResult } = this.state
        return (
            <div>
                <h3>Hit Enter to search the city</h3>
                <input type="text" placeholder="Enter your city" className="search-bar" onKeyUp={this.searchCitiesList.bind(this)} />
                {noResult ? <h3>No result based on your search</h3> : ''}
                {cities.map(i => {

                    return (
                        <div key={i.woeid}>
                            <h1>City:{i.title}</h1>
                            {i.consolidated_weather.map(j => {
                                return (
                                    <div className="city" key={j.id}>
                                        <div>Weather: {j.weather_state_name}  </div>
                                        <div> Date: {j.applicable_date}  </div>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    )
                }
                )}
            </div>
        );
    }
}