import React from "react";

import {Link} from "react-router-dom";
import {Menu} from "semantic-ui-react";

const Navigation = ({signedIn, signOut}) => (
  <Menu secondary style={{display: "flex", alignItems: "center"}}>
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
          <Link to="/profile"><Menu.Item name="profile" /></Link>
          <Menu.Item name="sign out" onClick={() => signOut()} />
          </>
        : <Link to="/signin"><Menu.Item name="sign in" /></Link>
      }
    </Menu.Menu>
  </Menu>
)

export default Navigation;
