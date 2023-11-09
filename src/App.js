import './App.css';
import './chatbot_kit.css'

import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Chatbot from 'react-chatbot-kit'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

import { Amplify, API } from 'aws-amplify'

import {
  LandingPage, LessonLobby, AboutUs, Conversation1, Conversation
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
          <Route index element={<LandingPage display="flex"/>} />
          <Route path="about-us" element={<AboutUs display="flex"/>} />
          <Route path="lobby" element={<LessonLobby display="flex"/>} />
          <Route path="conversation1" element={<Conversation1 display="flex"/>} />
          <Route path="conversation" element={<Conversation display="flex"/>} />
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
