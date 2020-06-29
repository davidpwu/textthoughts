import Link from "next/link";
import {Menu, Input} from "semantic-ui-react";

const Navigation = () => (
  <Menu secondary>
    <Link href="/">
      <Menu.Item>
        <img src="/android-chrome-192x192.png" />
      </Menu.Item>
    </Link>
    <Link href="/about"><Menu.Item name="about"/></Link>

    <Menu.Menu position="right">
      <Link href="/profile"><Menu.Item name="profile"/></Link>
      <Link href="/signin"><Menu.Item name="sign in"/></Link>
    </Menu.Menu>
  </Menu>
)

export default Navigation;
