// import React from "react";
// import Navigation from "../../components/navigation/navigation";

// import {Button, Container} from "semantic-ui-react";

// const About = ({stars}) => { 
//   return (
//   <>
//     <Container>
//       <Link href="/"><Button>Return Home</Button></Link>
      
//       <h1>What is TextThoughts - The unstructured journaling app?</h1>
//       <p>TextThoughts is the unstructured journaling app.</p>

//       {stars.good}

//       <footer>
//         Powered by the TextFox{' '}
//         <img 
//           src="/android-chrome-192x192.png" 
//           alt="TextThoughts Logo" 
//           className="logo" 
//           style={{height: "2em"}} 
//         />
//       </footer>
//     </Container>
//   </>  
// )}

// About.getInitialProps = async (ctx) => {
//   const res = await fetch(`${serverName}/hobo`);
//   const data = await res.json();
//   return {stars: data};
// }

// export default About;
