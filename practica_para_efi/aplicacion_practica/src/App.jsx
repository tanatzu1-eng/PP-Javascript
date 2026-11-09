import { useState } from 'react'
import './App.css'

import Navbar from "./components/navbar";
import Ui from "./components/ui";
import Tarjeta from "./components/tarjeta";
import Footer from "./components/footer"



// ============================================================================
// Simulacion de Database:
// ============================================================================
const database = [
    {id: 1, titulo: "producto1", precio: 1000, descripcion: "descripcion descriptiva del prodcto en cuestion"},
    {id: 2, titulo: "producto2", precio: 2000, descripcion: "descripcion descriptiva del prodcto en cuestion"},
    {id: 3, titulo: "producto3", precio: 3000, descripcion: "descripcion descriptiva del prodcto en cuestion"},
    {id: 4, titulo: "producto4", precio: 4000, descripcion: "descripcion descriptiva del prodcto en cuestion"},
    {id: 5, titulo: "producto5", precio: 5000, descripcion: "descripcion descriptiva del prodcto en cuestion"},
    {id: 6, titulo: "producto6", precio: 6000, descripcion: "descripcion descriptiva del prodcto en cuestion"},
    {id: 7, titulo: "producto7", precio: 7000, descripcion: "descripcion descriptiva del prodcto en cuestion"},
    {id: 8, titulo: "producto8", precio: 8000, descripcion: "descripcion descriptiva del prodcto en cuestion"},
    {id: 9, titulo: "producto9", precio: 9000, descripcion: "descripcion descriptiva del prodcto en cuestion"},
    {id: 10, titulo: "producto10", precio: 10000, descripcion: "descripcion descriptiva del prodcto en cuestion"},
  ];
// ============================================================================


/*
// ============================================================================
// Contador:
// ============================================================================
function Mi_contador() {
  const [actual, suma] = useState(0)

  return (
    <div className = 'col-span-4 col-start-5'>
      <p>Clicks: {actual}</p>

      <button onClick = {() => suma(actual + 1)} className = 'text-white bg-fuchsia-600 p-3 m-3 rounded-2xl'>Sumar 1</button>

      <button onClick = {() => suma(actual - 1)} className = 'text-white bg-red-600 p-3 m-3 rounded-2xl'>Restar 1</button>

      <button onClick={() => suma(0)} className = 'text-white bg-orange-600 p-3 m-3 rounded-2xl'>Devolver marcador a cero</button>
    </div>
  )
};
// ============================================================================



// ============================================================================
// Frase_que_desaparece:
// ============================================================================
function Frase_que_desaparece() {
  const [visibilidad, cambiar_visibilidad] = useState(true)

  return (
    <div className = 'col-start-5 col-end-9'>
      <button onClick = {() => cambiar_visibilidad(!visibilidad)} className = "bg-green-800 hover:bg-green-700 p-3 m-3 rounded hover:m-2 hover:p-4 text-white text-md shadow-olive-700 shadow-md hover:shadow-xl">Quitar/Restaurar frase</button>

      {visibilidad ? <p>esta frase tiene que desaparecer y aparecer cuando toque el boton de abajo</p> : ""}
    </div>
  )
};
// ============================================================================
*/



// ============================================================================
// boton que dice hola (actividad 1 de la clase 11/30):
// ============================================================================
function Hola() {
  const [estado_actual, cambiar_estado] = useState(true);

  return (
    <div className = 'col-start-4 col-span-6'>
      <button onClick = {() => cambiar_estado(!estado_actual)} className = 'bg-amber-500 rounded-2xl p-4 m-4 hover:p-5 hover:m-3 text-white shadow-amber-400 shadow-sm hover:shadow-md' >Escribir/Quitar "Hola"</button>

      {estado_actual && <p>hola</p>}
    </div>
  );
};
// ============================================================================



// ============================================================================
// tres botones (actividad 2 de la clase 11/30):
// ============================================================================
const nombres = [
  {id: 1, nombre: "Juan", edad: 20},
  {id: 2, nombre: "Martin", edad: 20},
  {id: 3, nombre: "Pepe", edad: 20},
];

function Tres_botones() {
  const [nombre_actual, cambiar_nombre] = useState("");

  return (
    <>
    <button
        onClick = {() => cambiar_nombre("")}
        className='p-3 m-3 hover:p-4 hover:m-2 bg-cyan-950 text-white rounded-2xl col-span-10 col-start-2'
    >Default</button>

    <div className = 'col-start-4 col-span-6'>

        {nombres.map((p) => (
          <button
            key = {p.id}
            nombre = {p.nombre}
            edad = {p.edad}
            onClick={() => cambiar_nombre(`, ${p.nombre}`)}
            className='p-3 m-3 hover:p-4 hover:m-2 bg-cyan-400 text-white rounded-2xl'
          >Boton {p.nombre}</button>
        ))}

        <p>Hola{nombre_actual}!</p>
      </div>
    </>
  );
};
// ============================================================================



// ============================================================================
// input onChange (actividad 3 de la clase 11/30):
// ============================================================================
function Input_onchange() {
  const [actual, cambiar] = useState("");

  return (
    <>
      <div
        className = 'col-start-3 col-span-8'>
        <input
          onChange = {(e) => cambiar(e.target.value)}
          className = 'bg-fuchsia-300 rounded-2xl p-2 text-black m-3'
          type="text" />
        
        <p className = 'text-black bg-amber-200 p-3 m-3 rounded-2xl'>{actual}</p>
      </div>
    </>
  );
};
// ============================================================================



// a futuro podria incorporar esto:
// .filter((p) => p.precio < 5000)

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />


        <Ui>
          {database.length > 0 ?
          database.map((p) => (
            <Tarjeta
              key = {p.id}
              titulo = {p.titulo}
              precio = {`$${p.precio}`}
              descripcion = {p.descripcion}
            />
          ))
          : <div className = 'bg-black rounded-xl text-white m-7 p-3 col-span-12'>No hay productos en la database</div>}
        </Ui>

        <hr className = 'my-10' />

        {/* <Ui>
          <Mi_contador />
        </Ui>

        <hr className = 'my-10' />

        <Ui>
          <Frase_que_desaparece />
        </Ui> */}

        <Ui>
          <Hola />
        </Ui>

        <hr className = 'my-10' />

        <Ui>
          <Tres_botones />
        </Ui>

        <hr className = 'my-10' />

        <Ui>
          <Input_onchange />
        </Ui>


      <Footer />
    </>
  );
};
