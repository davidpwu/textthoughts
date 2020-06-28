import AppHead from "../components/app-head/app-head";
import Header from "../components/header/header";

import Link from "next/link";

import {Button, Container} from "semantic-ui-react";

const Home = ({stars}) => {
  return (
    <>
      <AppHead />
      <Header />
      <Container style={{display: "flex", justifyContent: "center"}}>
        
    
        <main>
          <div>
            <h1 className="title" style={{display: "flex", alignItems: "center"}}>
              <img 
                src="/android-chrome-192x192.png" 
                alt="TextThoughts Logo" 
                className="logo" 
                style={{height: "2em"}} 
              />
              TextThoughts
            </h1>
            <p className="description">
              The Unstructured Journaling App
            </p>
          </div>

          <p>{stars}</p>
        </main>
      </Container>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();    
  return {stars: json.stargazers_count};
}

export default Home;
