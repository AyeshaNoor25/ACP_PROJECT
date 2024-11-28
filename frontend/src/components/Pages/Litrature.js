import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from '../../assets/L1.jpg'; // First image in assets folder
import b from '../../assets/L2.jpg'; // Second image in assets folder
import c from '../../assets/L3.jpg'; // Third image in assets folder
import d from '../../assets/L4.jpg'; // Fourth image in assets folder
import e from '../../assets/L5.jpg'; // Fifth image in assets folder

const booksData = [
  { name: "Middlemarch",price: "100Rs", image: a }, // Fixed typo in "Middlemarch"
  { name: "The Trial",price: "200Rs", image: b },
  { name: "Jane Eyre",price: "300Rs", image: c },
  { name: "Little Women",price: "400Rs", image: d }, // Fixed typo in "Little Women"
  { name: "Anna Karenina",price: "500Rs", image: e },
];

function Litrature({addToCart}) {
  return (
    <div className="Main"> {/* Changed 'class' to 'className' */}
      <Story heading="Literature" books={booksData}addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default Litrature;
