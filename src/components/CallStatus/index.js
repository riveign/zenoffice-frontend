import React, { Component } from 'react';
import axios from 'axios';
import Panel from 'react-bootstrap/lib/Panel';
import CallButton from '../CallButton';

export default class CallStatus extends Component {
  state = {
    onCall: false,
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      axios.get('http://10.0.0.110:5000/configuration').then((response) => {
        this.setState({ onCall: response.data.on_call });
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleEndCall = () => {
    axios.post('http://10.0.0.110:5000/configuration', { on_call: false });
  }

  render() {
    if (!this.state.onCall) {
      return <CallButton />;
    }

    return (
      <Panel
        className="panel-red"
        onClick={this.handleEndCall}
        header={(
          <div className="row">
            <div className="col-xs-3">
              <i
                className="fa fa-microphone-slash fa-3x"
              />
            </div>
            <div className="col-xs-9 text-right">
              <div className="text-right">Estás en call</div>
              <small onClick={this.handleEndCall}>Finalizar</small>
            </div>
          </div>
        )}
      />
    );
  }
}
