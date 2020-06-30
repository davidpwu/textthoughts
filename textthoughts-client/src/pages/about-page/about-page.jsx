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

        <h1>What is TextThoughts - The unstructured journaling app?</h1>
        <p>TextThoughts is the unstructured journaling app.</p>

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
  )
}

export default AboutPage;
