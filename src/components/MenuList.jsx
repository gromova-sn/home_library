import React, { Component } from "react";
import { Menu } from 'semantic-ui-react'

class MenuList extends Component {
  activeItem = "home"

  render() {
    return (
      <Menu secondary>
        <Menu.Item href='/'>Add links</Menu.Item>
        <Menu.Item href='/video'>To Watch</Menu.Item>
        <Menu.Item href='/learn'>To Learn</Menu.Item>
      </Menu>
    )
  }
}

export default MenuList;
