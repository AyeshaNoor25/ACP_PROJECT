import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from  '../../assets/M1.jpg'; // First image in assets folder
import b from  '../../assets/M2.jpg'; // Second image in assets folder
import c from '../../assets/M3.jpg'; // Third image in assets folder
import d from  '../../assets/M4.jpg'; // Fourth image in assets folder
import e from  '../../assets/M5.jpg'; // Fifth image in assets folder

const booksData = [
  { name: "The Da Vinci Code",price: "100Rs", image: a },
  { name: "The God of Woods",price: "200Rs", image: b },
  { name: "The Girl on the Train",price: "300Rs", image: c },
  { name: "The Girl with Dragon Tattoo",price: "400Rs", image: d },
  { name: "Gillian Flynn",price: "500Rs", image: e },
];

function Mystery({addToCart}) {
  return (
    <div className="Main"> {/* Changed 'class' to 'className' */}
      <Story heading="Mystery" books={booksData} addToCart={addToCart}/>
      <Footer />
    </div>
  );
}

export default Mystery;
