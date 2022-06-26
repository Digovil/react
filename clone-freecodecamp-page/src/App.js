import './App.css';
import Testimony from "./components/Testimony.js";

function App() {
  return (
      <div className='App'>
        <div className='container-main'>
          <h1>Here is what our alumni say about freeCodeCamp:</h1>
          <Testimony 
            name='Shawn Wang'
            country='Singapur'
            img='https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png'
            position='Software Engineer'
            business='Amazon'
            desc="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."/>

          <Testimony 
            name='Sarah Chima'
            country='Nigeria'
            img='https://www.freecodecamp.org/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png'
            position='Software Engineer'
            business='ChatDesk'
            desc='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'/>
          
          <Testimony 
            name='Emma Bostian'
            country='Sweden'
            img='https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png'
            position='Software Engineer'
            business='Spotify'
            desc="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."/>

        </div>
      </div>
  );
}

export default App;
