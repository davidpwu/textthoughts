import React from "react";

import {Container} from "semantic-ui-react";

const AboutPage = () => { 
  return (
    <>
      <Container>
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

        <p>TextThoughts is the unstructured journaling app.</p>

      </Container>
    </>  
  )
}

export default AboutPage;
