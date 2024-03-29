import React from 'react';
import Popup from 'reactjs-popup';
import "./Portfolio.css"
import { Book } from './CommonStyles';
import { VscBook } from "react-icons/vsc";
// https://jarocki.me/about

export default function MyLearningPopup({content}) {
  return (
    <Popup
    trigger={<Book><VscBook/></Book>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>&times;</button>
        <h2 className="header"> What I learned? </h2>
        <div className="content">
          {content.learning.map((item, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: item }} className='each-text'/>
          ))}
        </div>
      </div>
    )}
  </Popup>
  )
}