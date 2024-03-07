import React from 'react'
import Confetti from 'react-confetti'


export default function FinalComponent() {
  const [size, setSize] = React.useState({width: 0, height: 0});

  React.useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    setSize({width, height})

  },[])
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-10 rounded flex flex-col items-center gap-5">
          <h1 className="text-2xl text-neutral-700">Gracias Meli amor preciosa wapa hermosa TQM amor ❣❣❣ </h1>
          <img src="/perritos.jpeg" alt="perritos" className="" />
          <h1 className="text-neutral-500 text-xl">Eres mi persona favorita y espero que seamos muy felices por siempre 😭😭😭😭😭</h1>
      </div>
      <div>
        <Confetti
          style={{ pointerEvents: "none" }}
          width={size.width}
          height={size.height}
          numberOfPieces={500}

        />

      </div>
    </div>
  )
}
