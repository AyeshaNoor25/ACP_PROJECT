import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from  '../../assets/uf1.jpg'; // Ensure the path is correct
import b from '../../assets/uf2.jpg'; // Ensure the path is correct
import c from  '../../assets/uf3.jpg'; // Ensure the path is correct
import d from  '../../assets/uf4.jpg'; // Ensure the path is correct
import e from  '../../assets/uf5.jpg'; // Ensure the path is correct

const booksData = [
  { name: "پری کی ملت کی کہانی",price: "100Rs", image: a },
  { name: "شیر اور خرگوش",price: "200Rs", image: b },
  { name: "ملک کا پوشیدہ محل",price: "300Rs", image: c },
  { name: "سنہری کہانی",price: "400Rs", image: d },
  { name: "میری کہانی میری دنیا",price: "500Rs", image: e },
];

function UFaritails({addToCart}) {
  return (
    <div className="Main"> {/* Change 'class' to 'className' */}
      <Story heading="Faritails" books={booksData}addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default UFaritails;
