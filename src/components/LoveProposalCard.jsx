import React, { useState } from 'react';

const LoveProposalCard = ({setPage}) => {
    const [response, setResponse ] = useState(0)

    const respuesta = [
        {estado: 'Pensativo' ,mensaje: 'Estas segura amooor?', imagen: 'what.png'},
        {estado: "Preocupado", mensaje: 'Amor ya no estes jugando', imagen: 'serio.jpg'},
        { estado: "Esto ya no es un juego", mensaje: "Amor ya pues", imagen: 'sentao.jpeg'},
        { estado: "Mi existencia ya no tiene proposito", mensaje: "Amor dale al si", imagen: 'bate.jpeg'},
        { estado: "aveces me siento ( se sienta )", mensaje: 'Humano delgado', imagen: 'hanus.png'},
        { estado: "dificil de creer", mensaje: "ya no se que pensar", imagen: 'perro-triste.webp'},
        { estado: 'no entiendo', mensaje: ':(', imagen: 'serio.jpg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},
        {estado: "inconforme", mensaje: 'ahora solo puedes decir que si, sin peros ni refunfunios', imagen: 'perro.jpeg'},

    ]
    
  return (
    <div className="h-screen flex flex-col justify-center items-center animation">
    <div className="bg-white p-8 rounded-lg max-w-md mx-auto shadow-2xl">
      <h1 className="text-2xl font-bold mb-4 text-slate-300">
        {
            response === 0 ? "( musica de misterio ...)" : 
            respuesta[response].estado
        }
      </h1>

      
      <p className="mb-4 text-neutral-700">
        {
            response === 0 ? "Amooor, ¿Quieres ser mi novia?" : 
            respuesta[response].mensaje
        }
      </p>

      {
        response === 0 ? <img src="/nice.png" alt="perrito" className='my-5'/> :
        <img src={`/${respuesta[response].imagen}`} alt={respuesta[response].imagen} className='my-5' />
      }

      <div className="flex items-center justify-between gap-4">
        <button className="bg-green-600 w-full p-2 rounded text-white font-bold " onClick={() => setPage(2)}>Si</button>
        <button onClick={() => setResponse(response + 1)} className="bg-rose-600 w-full p-2 rounded text-white font-bold " >No</button>
      </div>

      <p className="text-gray-600 text-sm">
        {
            response === 0 ? "Espero tu respuesta con mucha ilusión. 💕" : 
            ":("
        }
      </p>
    </div>
    </div>
  );
};

export default LoveProposalCard;
