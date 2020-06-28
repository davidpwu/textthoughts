import AppHead from "../components/app-head/app-head"
import Header from "../components/header/header";

import Link from "next/link";

import {Button} from "semantic-ui-react";

const About = () => (
  <>
    <AppHead />
    <Header />
    <Link href="/"><Button>Return Home</Button></Link>
    
    <h1>Welcome to the About page.</h1>
    <h2>Describe the app here.</h2>

    <footer>
      Powered by the TextFox{' '}
      <img 
        src="/android-chrome-192x192.png" 
        alt="TextThoughts Logo" 
        className="logo" 
        style={{height: "2em"}} 
      />
    </footer>
  </>  
)

export default About;
