import './App.css';
import Aside from './components/Aside/Aside';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader></Preloader>
    }
    return (
      <BrowserRouter>
      
      <div className='body'>
      <div className="app-wrapper">
      
    <HeaderContainer></HeaderContainer>
    <Aside></Aside>
    <div className='app-wrapper-content'>
     <Main></Main>
     <Routes>
      <Route path='/login' element={<LoginContainer></LoginContainer>}></Route>
      </Routes>
    </div>
    <Footer></Footer>
    
      </div>
    </div>
    
    </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
