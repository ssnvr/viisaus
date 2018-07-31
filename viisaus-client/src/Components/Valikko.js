import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Valikko.css'
// import { Link } from 'react-router-dom'


class Valikko extends Component {
  // const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
  render() {
    return (
      <Navbar >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Visdom</a>
          </Navbar.Brand>
          {/* <Navbar.Toggle className="navi"/> */}
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="Pick a mood" id="basic-nav-dropdown">
              <MenuItem eventKey={2} href="#">
                😴
            </MenuItem>
              {/* <NavItem eventKey={3} href="#" onClick={Järjestämetoditähän}> */}
              {/* 😎
      </NavItem> */}
              <MenuItem eventKey={4} href="#">
                😍
            </MenuItem>
              <MenuItem eventKey={5} href="#">
                😂
      </MenuItem>
              <MenuItem eventKey={6} href="#">
                🔥
            </MenuItem>
              <MenuItem eventKey={7} href="#">
                💩
      </MenuItem>
              <MenuItem eventKey={8} href="#">
                Kaikki
      </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      // function renderDropdownButton(title, i) {
      //   return (
      //     <DropdownButton
      //       bsStyle={title.toLowerCase()}
      //       title={title}
      //       key={i}
      //       id={`dropdown-basic-${i}`}
      //     >
      //       <MenuItem eventKey="1">Action</MenuItem>
      //       <MenuItem eventKey="2">Another action</MenuItem>
      //       <MenuItem eventKey="3">Active Item</MenuItem>
      //     </DropdownButton>
      //   );
      // }

      // const buttonsInstance = (
      //   <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
      // );

      // render(buttonsInstance);
    );
  }
}
export default Valikko;