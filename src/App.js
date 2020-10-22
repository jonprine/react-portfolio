import React, { useState } from 'react';
// import Header from './components/Header';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  
  const [categories] = useState([
    {
      name: 'projects',
      description: 'Applications completed during the Full Stack course',
    },
    { name: 'resume', description: 'Resume' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div> {!contactSelected ? (
            <> 
        <Gallery currentCategory={currentCategory}></Gallery>
        <Resume></Resume>
          <About></About>
          </> 
          ) : 
            (
            <ContactForm></ContactForm>
            
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
