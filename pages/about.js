import Header from "../components/header/header";
import Link from "next/link";
import {Button} from "semantic-ui-react";

const About = () => (
  <div>
    <Header />
    <Link href="/"><Button>Return Home</Button></Link>
    
    <h1>Welcome to the About page.</h1>
    <h2>Describe the app here.</h2>
    
  </div>
)

export default About;
