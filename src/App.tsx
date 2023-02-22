import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from "./shared-components/demo";
import { Button, Tabs, TabsProps } from 'antd';
import 'antd/dist/reset.css';
import TabsContainer from './components/tabs-container';

function App() {
    return (
    <Container>
      <div style={{color:'black'}}>
          <h1>Apartmanagement</h1>
          <TabsContainer></TabsContainer>
      </div>
    </Container>
  );
}

export default App;
