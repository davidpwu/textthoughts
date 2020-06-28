import AppHead from "../components/app-head/app-head"
import Header from "../components/header/header";
const dev = process.env.NODE_ENV !== "production";
const serverName = dev ? `http://localhost:8080` : "https://textthoughts.com";

import Link from "next/link";

import {Button, Container} from "semantic-ui-react";

const About = ({stars}) => { 
  return (
  <>
    <AppHead />
    <Header />
    <Container>
      <Link href="/"><Button>Return Home</Button></Link>
      
      <h1>Welcome to the About page.</h1>
      <h2>Describe the app here.</h2>

      {stars.good}

      <footer>
        Powered by the TextFox{' '}
        <img 
          src="/android-chrome-192x192.png" 
          alt="TextThoughts Logo" 
          className="logo" 
          style={{height: "2em"}} 
        />
      </footer>
    </Container>
  </>  
)}

About.getInitialProps = async (ctx) => {
  const res = await fetch(`${serverName}/hobo`);
  const data = await res.json();
  return {stars: data};
}

export default About;
