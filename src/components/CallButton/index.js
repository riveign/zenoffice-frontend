import React, { Component } from 'react';
import axios from 'axios';
import Panel from 'react-bootstrap/lib/Panel';

export default class CallButton extends Component {
  handleClick = () => {
    axios.post('http://10.0.0.110:5000/configuration', { on_call: true });
  }

  render() {
    return (
      <Panel
        className="panel-green"
        onClick={this.handleClick}
        header={(
          <div className="row">
            <div className="col-xs-3">
              <i
                className="fa fa-phone-square fa-3x"
              />
            </div>
            <div className="col-xs-9 text-right">
              <div className="text-right">Empezar una call</div>
            </div>
          </div>
        )}
      />
    );
  }

}
