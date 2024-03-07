import React from "react";
import './lovecard.css'
export default function LoveCard({setPage}) {
  return (
    <div className="flex justify-center items-center flex-col h-screen animation">
      <div className="wrap">
        {/* <h1>Love </h1> */}
        <div className="postcard">
          <div className="letter">
            <form action="#" method="post" className="message_form">
              <p className="push">Querida </p>
              <input
                type="text"
                id="recipient"
                name="recipient_name"
                placeholder="Melanie"
                className="push"
              />
              <p> ,</p>
              <br />
              <label htmlFor="message">Mensaje</label>
              <br />
              <textarea
                id="message"
                name="message_to_recipient"
                placeholder="Durante el tiempo que hemos estado juntos te he llegado a querer y amar, eres una persona muy especial para mi. Te quiero mucho y me gustaría que fueras algo mas para mi."
              ></textarea>
              <br />
              <p>Atentamente, </p>
              <br />
              <input
                type="text"
                id="sender_name"
                name="sender"
                placeholder="Emi <3"
              />
            </form>
          </div>

          <div className="address">
            <img
              src="http://i44.photobucket.com/albums/f9/dandee114/stamp_zpsvbuxiwih.png"
              className="mail_stamp"
            />
            <form action="#" method="post" className="message_form">
              <input
                type="email"
                id="recipient_email"
                name="recipient_email"
                placeholder="Enviando esta carta desde:"
              />
            </form>
            <p id="address">
              Desde Suchiyork,
              <br />
              con mucho Love,
              <br />
              mua.
            </p>
          </div>
        </div>
      </div>

      <footer>
        <p>Emiliano Nataren.</p> <br />
        <button className="p-3 text-xl bg-rose-700 rounded hover:scale-105 transition-all" onClick={() => setPage(1)}>
          Ir a la siguiente pagina
        </button>
      </footer>
    </div>
  );
}
