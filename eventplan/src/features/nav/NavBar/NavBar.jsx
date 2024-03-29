      import React, { Component } from 'react';
      import {Menu, Container, Button} from 'semantic-ui-react';
      import {NavLink, Link} from 'react-router-dom'
      
      class NavBar extends Component {
          render() {
              return (
                <Menu inverted fixed="top">
                <Container>
                  <Menu.Item header>
                    <img src="/assests/logo.png" alt="logo" />
                   Trending
                  </Menu.Item>
                  <Menu.Item as= {NavLink}  to="/dashboard" name="Events" />
                  <Menu.Item as= {NavLink}  to="/people" name="People " />
                  <Menu.Item>
                    <Button floated="right" as={Link} to='/createevent' positive inverted content="Create Event" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button basic inverted content="Login" />
                    <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                  </Menu.Item>
                </Container>
              </Menu>
        
              )
          }
      }
     

      export default NavBar;