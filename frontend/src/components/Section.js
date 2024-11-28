import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Section.css';
import Header from './Header';
import b from '../assets/Crme&thills.jpg';
import c from '../assets/faritail.jpg';
import d from '../assets/fiction.jpg';
import i from '../assets/horror.jpg';
import j from '../assets/Mystery.jpg';
import m from '../assets/litrature.jpg';

function Section(cartItems, notificationCount) {
  return (
    <div><Header cartCount={cartItems.length} notificationCount={notificationCount} />
    <div className="section-container">
      <div className="search-bar-container">
        <input type="text" placeholder="Book, Category, Author" className="search-bar" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <h2>English</h2>
      <div className="image-scroll">
        <Link to="/CrimeAndThirills"><img src={b} alt="Crime and Thrills" /></Link>
        <Link to="/Faritails"><img src={c} alt="Fairy Tales" /></Link>
        <Link to="/Firiction"><img src={d} alt="Fiction" /></Link>
        <Link to="/Horror"><img src={i} alt="Horror" /></Link>
        <Link to="/Mystery"><img src={j} alt="Mystery" /></Link>
        <Link to="/Litrature"><img src={m} alt="Literature" /></Link>
      </div>

      <h2>Urdu</h2>
      <div className="image-scroll">
        <Link to="/UCrimeAndThirills"><img src={b} alt="UCrimeAndThrills" /></Link>
        <Link to="/UFaritails"><img src={c} alt="UFairytales" /></Link>
        <Link to="/UFiriction"><img src={d} alt="UFiction" /></Link>
        <Link to="/UHorror"><img src={i} alt="UHorror" /></Link>
        <Link to="/UMystery"><img src={j} alt="UMystery" /></Link>
        <Link to="/ULitrature"><img src={m} alt="ULiterature" /></Link>
      </div>
    </div>
    </div>
  );
}

export default Section;
