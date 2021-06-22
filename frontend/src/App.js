import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen'

const App =()=> {
  
  return (
    <Router>
    <Header></Header>
    <Container>
      <main className='py-3'>
        <Route path='/'component={HomeScreen} exact></Route>
        <Route path='/product/:id' component={ProductScreen}></Route>
      </main>
    </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
