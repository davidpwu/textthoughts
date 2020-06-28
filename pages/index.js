import AppHead from "../components/app-head/app-head";
import Header from "../components/header/header";
import Message from "../components/message/message";

import Link from "next/link";

import {Button, Container, Input} from "semantic-ui-react";

const Home = ({stars}) => {
  return (
    <>
      <AppHead />
      <Header />
      <Container style={{display: "flex", flexDirection: "column", height: 500, alignContent: "center"}}>
        <div>
          <h1 className="title">
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

        <Message />

        <Input 
          fluid 
          icon="search" 
          placeholder="Search..." 
          // style={{alignSelf: "flex-end"}} 
        />
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
