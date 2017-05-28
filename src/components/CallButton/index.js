import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';

export default function CallButton() {
  return (
    <Panel
      className="panel-green"
      header={(
        <div className="row">
          <div className="col-xs-3">
            <i
              className="fa fa-phone-square fa-5x"
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
