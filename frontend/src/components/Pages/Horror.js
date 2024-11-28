import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from  '../../assets/h1.jpg'; // First image in assets folder
import b from  '../../assets/h2.jpg'; // Second image in assets folder
import c from '../../assets/h3.jpg'; // Third image in assets folder
import d from '../../assets/h4.jpg'; // Fourth image in assets folder
import e from  '../../assets/h5.jpg'; // Fifth image in assets folder

const booksData = [
  { name: "Sleep Tight",price: "100Rs", image: a },
  { name: "The Exorcist",price: "200Rs", image: b },
  { name: "Stephen King",price: "300Rs", image: c },
  { name: "Frankenstein",price: "400Rs", image: d },
  { name: "Shirley Jackson",price: "500Rs", image: e },
];

function Horror({addToCart}) {
  return (
    <div className="Main"> {/* Changed 'class' to 'className' */}
      <Story heading="Horror" books={booksData} addToCart={addToCart}/>
      <Footer />
    </div>
  );
}

export default Horror;
