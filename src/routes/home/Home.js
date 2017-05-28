

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';

import s from './Home.css';
import StatWidget from '../../components/Widget';
import CallStatus from '../../components/CallStatus';
import LiveChart from '../../components/LiveChart';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'Zenoffice';

const data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

const callInProgress = false;

function Home(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-8">
          <PageHeader>Segundo piso</PageHeader>
        </div>
        <div className="col-lg-4" style={{ padding: 10 }}>
          <CallStatus />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-primary"
            icon="fa fa-thermometer-half fa-5x"
            count="26 C"
            headerText="Temperatura"
            footerText="Ver Historial"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-green"
            icon="fa fa-tachometer fa-5x"
            count="12"
            headerText="Decibeles"
            footerText="Ver Historial"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-yellow"
            icon="fa fa-users fa-5x"
            count="15"
            headerText="Personas"
            footerText="Ver detalles"
            linkTo="/"
          />
        </div>
        <div className="col-lg-3 col-md-6">
          <StatWidget
            style="panel-red"
            icon="fa fa-exclamation-triangle fa-5x"
            count="13"
            headerText="Quejas"
            footerText="Ver detalles"
            linkTo="/"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Estadísticas
              <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton1" >
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <LiveChart />
          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-clock-o fa-fw" /> Eventos
            </span>}
          >
            <div>
              <ul className="timeline">
                <li>
                  <div className="timeline-badge"><i className="fa fa-check" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Call de Fabi</h4>
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> Hace 11 minutos
                        </small>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge warning"><i className="fa fa-credit-card" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Se prendieron los aires</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> Hace 2 horas
                        </small>
                      </p>
                      <p>
                        Con una temperatura de 28º, 3 personas se quejaron del calor
                        y se prendieron los aires en 24º.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge danger"><i className="fa fa-bomb" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">!Momento ruidoso!</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> Hace 3 horas
                        </small>
                      </p>
                      <p>
                        Se supero el umbral de ruido.
                        Se notificó por slack y se disminuyó el ruido sin quejas.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Panel>

        </div>

        <div className="col-lg-4">

          <Panel
            header={<span>
              <i className="fa fa-bell fa-fw" /> Notificaciones
            </span>}
          >
            <ListGroup>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-comment fa-fw" /> Pablo va a tener una call en 30 minutos
                <span className="pull-right text-muted small"><em>Hace 7 minutos</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-check fa-fw" /> ¡El 2do piso fue el más tranquilo de la semana!
                <span className="pull-right text-muted small"><em>Hace 15 minutos</em></span>
              </ListGroupItem>
            </ListGroup>
            <Button block>View All Alerts</Button>
          </Panel>

        </div>

      </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
