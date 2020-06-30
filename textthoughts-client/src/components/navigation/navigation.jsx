import React from "react";

import {Menu} from "semantic-ui-react";

const Navigation = () => (
  <Menu secondary>
    <Menu.Item>
      <img src="/android-chrome-192x192.png" />
    </Menu.Item>
    <Menu.Item name="about"/>
    <Menu.Menu position="right">
      <Menu.Item name="profile"/>
      <Menu.Item name="sign in"/>
    </Menu.Menu>
  </Menu>
)

export default Navigation;
