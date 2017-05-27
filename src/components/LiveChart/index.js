import React, { Component } from 'react';
import axios from 'axios';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart,
  ResponsiveContainer } from '../../vendor/recharts';

const maxTtss = 20;

export default class LiveChart extends Component {

  state = {
    data: [{ temperature: 0, volume: 0 }],
    polling: false,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const lastTimestamp = this.state.data.length === 0 ?
        0 : this.state.data[this.state.data.length - 1].timestamp || 0;
      axios.get(`http://10.0.0.110:5000/tts?from=${lastTimestamp}`).then((response) => {
        let newData = JSON.parse(response.data);
        if (newData.length === 0) {
          newData = [{
            timestamp: 3000000.0,
            volume: Math.floor((Math.random() * 20) + 5),
            temperature: Math.floor((Math.random() * 15) + 10),
            on_call: true,
          }];
        }
        this.setState((prevState) => ({
          polling: true,
          data: this.appendTtss(prevState.data, newData),
        }));
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  appendTtss = (data, newData) => [...data, ...newData].slice(-maxTtss)

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={2}>
        <AreaChart data={this.state.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Area
            isAnimationActive={!this.state.polling}
            type="monotone"
            dataKey="temperature"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            isAnimationActive={!this.state.polling}
            type="monotone"
            dataKey="volume"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
