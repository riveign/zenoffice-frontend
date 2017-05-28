import React, { PropTypes } from 'react';
import {
  Panel, PageHeader, ListGroup, ListGroupItem, FormControl,
} from 'react-bootstrap';

import StatWidget from '../../components/Widget';

const title = 'Configuración';

const configData = {
  polling_frequency_ms: { desc: 'Frecuencia de muestreo', icon: 'fa-hourglass-half' },
  sound_threshold: { desc: 'Umbral de sonido', icon: 'fa-volume-up' },
  hot_threshold: { desc: 'Umbral de calor', icon: 'fa-fire' },
  cold_threshold: { desc: 'Umbral de frío', icon: 'fa-snowflake-o' },
};

const config = {
  polling_frequency_ms: 2000,
  sound_threshold: 5,
  hot_threshold: 26,
  cold_threshold: 17,
};

function displayConfig(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Configuración</PageHeader>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">

          <Panel
            header={<span>
              <i className="fa fa-cog fa-fw" /> Variables
            </span>}
          >
            <ListGroup>
              {
                Object.keys(config).map((key) => (
                  <ListGroupItem key={key} href="" onClick={(e) => { e.preventDefault(); }}>
                    <i className={`fa ${configData[key].icon} fa-fw`} /> {configData[key].desc}
                    <FormControl
                      bsSize="small"
                      className="pull-right"
                      style={{ width: 300 }}
                      value={config[key]}
                    />
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Panel>
        </div>
      </div>
    </div>
  );
}


displayConfig.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayConfig;
