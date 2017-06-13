import React, {Component} from "react";
import { Menu } from 'semantic-ui-react'

class MenuList extends Component {
  activeItem = "home"

  render() {
    return (
      <Menu secondary>
        <Menu.Item href='/video'>К просмотру</Menu.Item>
        <Menu.Item href='/learn'>К изучению</Menu.Item>
      </Menu>
    )
  }
}

export default MenuList;
