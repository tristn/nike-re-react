import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { Grid, Header, Menu, Image, Card, CardContent, GridRow, Container, Icon } from 'semantic-ui-react';

class MenuRow extends React.Component {

  render() {
    return (
        <Menu fluid secondary borderless className ='topbar'>
          <Menu.Item>
            <Image src='https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png' size='mini' floated='left'/>
          </Menu.Item>
          <Menu.Item>
            <Image src="https://i.pinimg.com/originals/3c/9a/bb/3c9abb709bee6a44a4490544d7f3f5e5.png" size='mini'/>
          </Menu.Item>
            <Menu.Item position='right'>Help</Menu.Item>
            <Menu.Item>Join Us</Menu.Item>
            <Menu.Item>Sign In</Menu.Item>
        </Menu>

    );
  }
}

class AddressRow extends React.Component {
  render() {
    return (
        <Menu centered secondary borderless>

          <Menu.Item>New Releases</Menu.Item>
          <Menu.Item>Men</Menu.Item>
          <Menu.Item>Women</Menu.Item>
          <Menu.Item>Kids</Menu.Item>
          <Menu.Item>Customize</Menu.Item>
          <Menu.Item>Sale</Menu.Item>
          <Menu.Item><Icon name='search icon'/></Menu.Item>
        </Menu>

    );
  }
}

class LogoRow extends React.Component {
  render() {
    return (
        <Grid.Row>
        <Image src="https://i.ibb.co/vwcBnb0/Fly.png" size='massive'/>
        </Grid.Row>

    );
  }
}





class TchinTchin extends React.Component {
  render() {
    return (
        <Grid centered container>
          <GridRow><MenuRow/></GridRow>
          <GridRow><AddressRow/></GridRow>
          <GridRow><LogoRow/></GridRow>
        </Grid>
    );
  }
}

ReactDOM.render(<TchinTchin/>, document.getElementById('root'));