import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from '../../assets/UC&T1.jpg'; // First image in assets folder
import b from '../../assets/UC&T2.jpg'; // Second image in assets folder
import c from  '../../assets/UC&T3.jpg'; // Third image in assets folder
import d from '../../assets/UC&T4.jpg'; // Fourth image in assets folder
import e from  '../../assets/UC&T5.jpg'; // Fifth image in assets folder

const booksData = [
  { name: "شیش محل",price: "100Rs", image: a },
  { name: "میں ایک جاسوس تھا",price: "200Rs", image: b },
  { name: "جرم و سزا",price: "300Rs", image: c },
  { name: "2 جرم و سزا",price: "400Rs", image: d },
  { name: "سرد کھائی",price: "500Rs", image: e },
];

function UCrimeAndThirills({addToCart}) {
  return (
    <div className="Main"> {/* Changed 'class' to 'className' */}
      <Story heading="Urdu CrimeAndThirills" books={booksData} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default UCrimeAndThirills;
