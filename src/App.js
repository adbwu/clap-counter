import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [audioStream, setAudioStream] = useState(null);
  const [recording, setRecording] = useState(false);

  //Function to request audio from user on button click
  const startRecording = async () => {
    if (recording === false) {
      try {
        //Requests user audio
        const userAudio = await navigator.mediaDevices.getUserMedia({ audio: true });
        //Saves stream
        setAudioStream(userAudio);
        setRecording(true);
      } catch (error) {
        console.error("Error accessing user media:", error);
      }
    }
    else {
      try {
        //Stops accessing user audio
        audioStream.getTracks().forEach(track => track.stop());
        setRecording(false);
      } catch (error) {
        console.error("Error accessing user media:", error);
      }
    }
  };

  const micState = () => {
    if (recording === false) {
      return "Turn Mic On";
    }
    else {
      return "Turn Mic Off";
    }
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Clap Counter</h1>
      </header>
      <main>
        <button onClick={startRecording}>{micState()}</button>
      </main>
    </div>
  );
}

export default App;
