import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from '../../assets/ufriction1.jpg'; // Ensure the path is correct
import b from '../../assets/ufriction2.jpg'; // Ensure the path is correct
import c from '../../assets/ufriction3.jpg'; // Ensure the path is correct
import d from '../../assets/ufriction4.jpg'; // Ensure the path is correct
import e from '../../assets/ufriction5.jpg'; // Ensure the path is correct

const booksData = [
  { name: "روح یام",price: "100Rs", image: a },
  { name: "اب حیات",price: "200Rs", image: b },
  { name: "نمل",price: "300Rs", image: c },
  { name: "جنت کے پتے",price: "400Rs", image: d },
  { name: "پیر کامل",price: "500Rs", image: e },
];

function UFiriction({addToCart}) {
  return (
    <div className="Main"> {/* Change 'class' to 'className' */}
      <Story heading="Firiction" books={booksData}addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default UFiriction;
