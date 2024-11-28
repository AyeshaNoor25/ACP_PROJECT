import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from '../../assets/f1.jpg';
import b from '../../assets/f2.jpg';
import c from '../../assets/f3.jpg';
import d from '../../assets/f4.jpg';
import e from '../../assets/f5.jpg';

const booksData = [
  { name: "Snow White",price: "100Rs", image: a },
  { name: "Rapunzel",price: "200Rs", image: b },
  { name: "Hansel and Gretel",price: "300Rs", image: c },
  { name: "Cinderella",price: "400Rs", image: d },
  { name: "Little Red Riding Hood",price: "500Rs", image: e },
];

function Faritails({addToCart}) {
  return (
    <div className="Main">
      <Story heading="Fairytales" books={booksData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default Faritails;
