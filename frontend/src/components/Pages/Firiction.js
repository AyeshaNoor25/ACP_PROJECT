import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from  '../../assets/friction1.jpg'; // First image in assets folder
import b from '../../assets/friction2.jpg'; // Second image in assets folder
import c from'../../assets/friction3.jpg'; // Third image in assets folder
import d from '../../assets/friction4.jpg'; // Fourth image in assets folder
import e from '../../assets/friction5.jpg'; // Fifth image in assets folder

const booksData = [
  { name: "Liane Moriarty",price: "100Rs", image: a },
  { name: "The Hunger Games",price: "200Rs", image: b }, // Fixed typo: "Hunge" to "Hunger"
  { name: "The Book Thief",price: "300Rs", image: c },
  { name: "The Great Gatsby",price: "400Rs", image: d },
  { name: "1984",price: "500Rs", image: e },
];

function Friction({addToCart}) {
  return (
    <div className="Main"> {/* Changed 'class' to 'className' */}
      <Story heading="Friction" books={booksData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default Friction;
