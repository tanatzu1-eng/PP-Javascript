import { useState } from 'react'
import './App.css'

import Navbar from "./components/navbar";
import Section from "./components/section"
import Tarjeta from "./components/tarjeta"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
      <Section>
        <Tarjeta titulo = 'Titulo de la primera tarjeta' descripcion = 'descripcion de la primera tarjeta' />
        <Tarjeta titulo = 'Titulo de la segunda tarjeta' descripcion = 'descripcion de la segunda tarjeta' />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
        <Tarjeta />
      </Section>
    </>
  );
};

export default App;
