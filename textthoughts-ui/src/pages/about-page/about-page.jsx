import React from "react";

import {Container, Header, Step, Icon} from "semantic-ui-react";

// fetch("http://localhost:3001/hobo")
//     .then((res) => res.json())
//     .then((data) => setThisData(data))
//     .catch((err) => console.log(err))

const AboutPage = () => { 
  // const [thisData, setThisData] = useState("init");
  
  return (
    <>
      <Container>
        <Header as="h2" style={{textAlign: "center"}}>
          <img 
            src="/android-chrome-192x192.png" 
            alt="TextThoughts Logo" 
            className="logo" 
          />
          <Header.Content>
            TextThoughts
            <Header.Subheader>The Unstructured Journaling App</Header.Subheader>
          </Header.Content>
        </Header>
        {/* <p>{thisData?.good}</p> */}

        <h2>What is TextThoughts?</h2>
        <p>Writing is a luxury open to all. It's an act that can bring clarity to our thoughts and provide a personal history to look back upon. Unfortunately, not everyone takes advantage of the power of journaling. Traditionally the act of journaling involved having a physical journal that you might have lugged along with you throughout the day, and writing a daily entry of reflections on the day.</p>
        <p>The issue with this approach is that reliance on a physical journal means that when a random thought comes up, you might let it slip by if your journal is out of reach. Random thoughts are fundamental to our nature so giving up on documenting this part of our lives leaves a lot on the table. With the advent of the smartphone, when a thought comes up, it has become much easier to pull out a smartphone and jot down a note. But traditionally these are just notes that eventually clutter up our apps and have no rhyme or reason looking back at them. Usually they don't end up memorialized in a journal.</p>
        <p>Most journaling apps are built upon the idea of making entries, similar to traditional journaling, but the question is, does this truly capture the essence of the day? This provides a very filtered and constrained view on our lives. For most people, I would guess that a lot of random thoughts end up as texts sent to friends, as searches on Google, or as posts lost in the abyss of social media. They are not documented in any formal, personal way, in a journal.</p>
        <p>This is where TextThoughts comes into play. TextThoughts - The Unstructured Journaling App, is an app that allows you to journal through texting. It's an extremely simple idea, but extremely powerful. Instead of forcing yourself to journal, the idea is to remove as much friction as possible, to encourage the act as much as possible. Traditional journaling puts a lot of pressure on making sure the single entry is perfect. Sending texts (for the most part) involves much less pressure, and is actually quite enjoyable for most people.</p>

        <h2>How It Works</h2>
        <ul>
          <li>Create an account and log in</li>
          <li>Send texts</li>
          <li>Select a date from the calendar to see texts you sent on that day</li>
          <li>That's pretty much it...</li>
        </ul>

        <h2>Features</h2>
        <ul>
          <li><strong>Progressive Web App (PWA)</strong> - A progressive web app is a web app that can be accessed from any device with a browser (mobile or personal computer) that has much of the feel and features of a native app (meaning an app you might download off of the Google Play Store or Apple App Store). The design decision behind making TextThoughts a PWA comes down to a number of reasons but mainly, the web is ubiquitous. There is no central company like Apple or Google controlling access to the app, and development can be focused in one codebase while providing most of the necessary benefits of native apps. The main negative is that you may have to re-authenticate if your browser is set to a setting that makes it forget logins.</li>
          <li><strong>Badass</strong> - This is a badass app</li>
        </ul>

        <h2>Disclaimer</h2>
        <p>Note that all sent texts attached to your account will be stored in the TextThoughts database. This means that in theory, TextThoughts can access your texts. Given that this is a personal journaling app and not a social media platform, there is zero reason to access this data for censorship or otherwise. But this is the state of data storage. The intent is to add a feature to allow you to export all your texts if you so choose. Perhaps there is some way to allow users to provide a database, but that's a discussion for later.</p>
        <p></p>

      </Container>
    </>
  )
}

export default AboutPage;
