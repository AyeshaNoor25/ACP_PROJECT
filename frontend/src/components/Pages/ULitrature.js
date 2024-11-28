import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from '../../assets/ul1.jpg'; // Ensure the path is correct
import b from  '../../assets/ul2.jpg'; // Ensure the path is correct
import c from '../../assets/ul3.jpg'; // Ensure the path is correct
import d from '../../assets/ul4.jpg'; // Ensure the path is correct
import e from  '../../assets/ul5.jpg'; // Ensure the path is correct

const booksData = [
  { name: "کلیات اقبال",price: "100Rs", image: a },
  { name: "غالب",price: "200Rs", image: b },
  { name: "شارح دیوان",price: "300Rs", image: c },
  { name: "کراچی میں اردو غزل یا نظم",price: "400Rs", image: d },
  { name: "آزاد نظم",price: "500Rs", image: e },
];

function ULitrature({addToCart}) {
  return (
    <div className="Main">
      <Story heading="Litrature" books={booksData}addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default ULitrature;
