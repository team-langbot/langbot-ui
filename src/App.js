import './App.css';
import './chatbot_kit.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Amplify, API } from 'aws-amplify'

import {
  LandingPage, LessonLobby, AboutUs, Conversation1, ConvOneSample, ConvTwoSample, ConvOneActual
 } from './ui-components';


function App() {
  // return (
  //   <div className='App'>
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
  //     </header>
  //   </div>
  // );
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/">
          <Route index element={<LessonLobby display="flex"/>} />
          <Route path="about-us" element={<AboutUs display="flex"/>} />
          <Route path="lobby" element={<LessonLobby display="flex"/>} />
          <Route path="conversation1" element={<Conversation1 display="flex"/>} />
          <Route path="convOneSample" element={<ConvOneSample display="flex"/>} />
          <Route path="convTwoSample" element={<ConvTwoSample display="flex"/>} />
          <Route path="convOneActual" element={<ConvOneActual display="flex"/>} />
          <Route path="text" element={<TestPage display="flex" />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </div>

  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
  //     </header>
  //   </div>
  // );
}

export default App;

const TestPage = () => {
  const apiName = 'projectLangbotApi'; // replace this with your api name.
  const path = '/text'; //replace this with the path you have configured on your API
  const myInit = {
    body: {"conversationId": 2, "stepNumber": 1, "attemptNumber": 1, "text": "hola"},
    headers: {} // OPTIONAL
  };

  API.post(apiName, path, myInit)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
  return <h1>Testing API Endpoint</h1>;
};
