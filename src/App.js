import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [audioStream, setAudioStream] = useState(null);

  //Function to request audio from user on button click
  const startRecording = async () => {
    try {
      const userAudio = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioStream(userAudio);
    } catch (error) {
      console.error("Error accessing user media:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clap Counter</h1>
      </header>
      <main>
        <button onClick={startRecording}>Mic On</button>
      </main>
    </div>
  );
}

export default App;
