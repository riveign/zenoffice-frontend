import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import StatWidget from '../../../components/Widget';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


const title = 'Perfil';

function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Ignacio Rivera</PageHeader>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">

          <Panel
            header={<span>
              <i className="fa fa-bell fa-fw" /> Informacion personal
            </span>}
          >
            <ListGroup>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-birthday-cake fa-fw" /> Fecha de nacimientos
                <span className="pull-right text-muted small"><em>07/06/1993</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-phone fa-fw" /> Telefono oficina
                <span className="pull-right text-muted small"><em>4215 2444</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-mobile fa-fw" /> Telefono personal
                <span className="pull-right text-muted small"><em>+(54)1166657422</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-building fa-fw" /> Piso actual
                <span className="pull-right text-muted small"><em>2do Piso</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-users fa-fw" /> Rol
                <span className="pull-right text-muted small"><em>Chief Party Officer</em></span>
              </ListGroupItem>
              <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
                <i className="fa fa-clock-o fa-fw" /> Horario de trabajo
                <span className="pull-right text-muted small"><em>9:00 - 18:00</em></span>
              </ListGroupItem>
            </ListGroup>
          </Panel>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <StatWidget
                style="panel-primary"
                icon="fa fa-thermometer-full fa-5x"
                count="26 C"
                headerText="Temperatura ideal"
                footerText="Ver Historial"
                linkTo="/"
              />
            </div>
            <div className="col-lg-6">
              <StatWidget
                style="panel-green"
                icon="fa fa-volume-up fa-5x"
                count="15 dB"
                headerText="Volumen ideal"
                footerText="Ver Historial"
                linkTo="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;


