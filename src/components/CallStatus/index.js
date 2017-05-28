import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

export default function CallStatus({ name }) {
  return (
    <Panel
      className="panel-red"
      header={(
        <div className="row">
          <div className="col-xs-3">
            <i
              className="fa fa-microphone-slash fa-5x"
            />
          </div>
          <div className="col-xs-9 text-right">
            <div className="text-right">{name} está en call</div>
            <small>Por favor, no hagas mucho ruido</small>
          </div>
        </div>
      )}
    />
  );
}

CallStatus.propTypes = {
  name: React.PropTypes.string.isRequired,
};
