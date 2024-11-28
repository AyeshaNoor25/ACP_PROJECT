import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from '../../assets/um1.jpg'; // Ensure the path is correct
import b from '../../assets/um2.jpg'; // Ensure the path is correct
import c from  '../../assets/um3.jpg'; // Ensure the path is correct
import d from '../../assets/um4.jpg'; // Ensure the path is correct
import e from  '../../assets/um5.jpg'; // Ensure the path is correct

const booksData = [
  { name: "دستک",price: "100Rs", image: a },
  { name: "شر کا سہارا",price: "200Rs", image: b },
  { name: "30 گھنٹے",price: "300Rs", image: c },
  { name: "دولت کا جال",price: "400Rs", image: d },
  { name: "اجنبی لڑکی",price: "500Rs", image: e },
];

function UMystery({addToCart}) {
  return (
    <div className="Main">
      <Story heading="Mystery" books={booksData}addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default UMystery;
