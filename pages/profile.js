import Header from "../components/header/header";
import Link from "next/link";
import {Button} from "semantic-ui-react";

const Profile = () => (
  <div>
    <Header />
    <Link href="/"><Button>Return Home</Button></Link>

    <h1>Welcome to the Profile page</h1>
    <h2>Allow exporting data and what not here.</h2>

  </div>
)

export default Profile;
