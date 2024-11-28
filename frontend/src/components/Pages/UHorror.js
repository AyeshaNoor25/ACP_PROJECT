import React from 'react';
import Footer from '../Footer';
import Story from '../Story';
import a from  '../../assets/uh1.jpg'; // Ensure the path is correct
import b from '../../assets/uh2.jpg'; // Ensure the path is correct
import c from '../../assets/uh3.jpg'; // Ensure the path is correct
import d from '../../assets/uh4.jpg'; // Ensure the path is correct
import e from  '../../assets/uh5.jpg'; // Ensure the path is correct

const booksData = [
  { name: "حریت کدا",price: "100Rs", image: a },
  { name: "پاگل خانہ",price: "200Rs", image: b },
  { name: "نظر خراب",price: "300Rs", image: c },
  { name: "سدیو باد",price: "400Rs", image: d },
  { name: "عرف",price: "500Rs", image: e },
];

function UHorror({addToCart}) {
  return (
    <div className="Main">
      <Story heading="Horror" books={booksData} addToCart={addToCart}/>
      <Footer />
    </div>
  );
}

export default UHorror;
