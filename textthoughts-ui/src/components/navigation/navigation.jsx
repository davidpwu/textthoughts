import React from "react";

import {Link} from "react-router-dom";
import {Menu, Icon} from "semantic-ui-react";

const Navigation = ({signedIn, signOut}) => (
  <Menu secondary style={{
    display: "flex", 
    alignItems: "center", 
    // margin: "0", 
    height: "40px",
    // position: "fixed",
    // top: "0px",
    // left: "0px",
    // right: "0px"
  }}>
    <Link to="/">
      <Menu.Item>
        <img src="/android-chrome-192x192.png" alt="Logo" />
      </Menu.Item>
    </Link>
    <Link to="/about"><Menu.Item name="about" /></Link>
    <Menu.Menu position="right">
      {
        signedIn ? 
          <>
          <Menu.Item name="calendar">
            <Icon name="calendar" />
          </Menu.Item>
          <Link to="/profile">
            <Menu.Item name="user circle">
              <Icon name="user circle" />
            </Menu.Item>
          </Link>
          <Menu.Item name="sign out" onClick={() => signOut()} />
          </>
        : <Link to="/signin"><Menu.Item name="sign in" /></Link>
      }
    </Menu.Menu>
  </Menu>
)

export default Navigation;
