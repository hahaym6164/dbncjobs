import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './style.css'
const url = "https://www.metaweather.com/api/location/search/?query="

export default class SearchCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        }

    }
    componentDidMount() {
        axios.get(url + e, {
        }).then(res => {
            // this.setState
        })

    }



    render() {

        let { studentList } = this.state;
        return (
            <div>
            </div>
        );
    }
}