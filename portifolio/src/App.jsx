import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Banner from './components/banner/Banner';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
