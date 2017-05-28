

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
import CallButton from '../../components/CallButton';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'Sb Admin React';

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
        <div className="col-lg-4">
          {
            callInProgress ? (
              <CallStatus
                name="Ignacio"
              />
          ) : (
            <CallButton />
          )
          }
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
              <i className="fa fa-bar-chart-o fa-fw" /> Area Chart Example
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
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-bar-chart-o fa-fw" /> Bar Chart Example
              <div className="pull-right">
                <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton2">
                  <MenuItem eventKey="1">Action</MenuItem>
                  <MenuItem eventKey="2">Another action</MenuItem>
                  <MenuItem eventKey="3">Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
              </div>
            </span>}
          >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pv" stackId="1" fill="#8884d8" />
                  <Bar dataKey="uv" stackId="1" fill="#82ca9d" />
                  <Bar type="monotone" dataKey="amt" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>

          <Panel
            header={<span>
              <i className="fa fa-clock-o fa-fw" /> Responsive Timeline
            </span>}
          >
            <div>
              <ul className="timeline">
                <li>
                  <div className="timeline-badge"><i className="fa fa-check" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lorem ipsum dolor</h4>
                      <p>
                        <small className="text-muted">
                          <i className="fa fa-clock-o" /> 11 hours ago via Twitter
                        </small>
                      </p>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                        laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia
                        pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas
                        suscipit facere rem dicta, debitis.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-badge warning"><i className="fa fa-credit-card" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lorem ipsum dolor</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem
                        quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis
                        rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia
                        repellendus.
                      </p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
                        maiores odit qui est tempora eos, nostrum provident explicabo dignissimos
                        debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge danger"><i className="fa fa-bomb" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lorem ipsum dolor</h4>
                    </div>
                    <div className="timeline-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
                        numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil
                        iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.
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
                <span className="pull-right text-muted small"><em>7 minutes ago</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-check fa-fw" /> ¡El 2do piso fue el más tranquilo de la semana!
                <span className="pull-right text-muted small"><em>15 minutes ago</em></span>
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
