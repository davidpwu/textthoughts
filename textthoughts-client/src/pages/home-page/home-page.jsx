import React from "react";

import Message from "../components/message/message";

import {Button, Container, Input} from "semantic-ui-react";

const HomePage = ({stars}) => {
  return (
    <>
      <AppHead />
      <Navigation />
      <Container style={{display: "flex", flexDirection: "column", height: 500, alignContent: "center"}}>
        <div>
          <h1 className="title" style={{display: "flex", alignContent: "center"}}>
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

        <Message text={"I'm an example message"} sentDate={new Date()} />
        <Message text={"I'm an example message"} sentDate={new Date()} />
        <Message text={"I'm an example message"} sentDate={new Date()} />

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

// Home.getInitialProps = async (ctx) => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();    
//   return {stars: json.stargazers_count};
// }

export default HomePage;
