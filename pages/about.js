import AppHead from "../components/app-head/app-head"
import Navigation from "../components/navigation/navigation";
const dev = process.env.NODE_ENV !== "production";
const serverName = dev ? `http://localhost:8080` : "https://textthoughts.com";

import Link from "next/link";

import {Button, Container} from "semantic-ui-react";

const About = ({stars}) => { 
  return (
  <>
    <AppHead />
    <Navigation />
    <Container>
      <Link href="/"><Button>Return Home</Button></Link>
      
      <h1>What is TextThoughts - The unstructured journaling app?</h1>
      <p>TextThoughts is the unstructured journaling app.</p>

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
