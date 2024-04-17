import React from 'react';
import  ReactDOM from 'react-dom/client';

import './index.css';
import {books} from './books';
import Book from './Book';


const BookList =() => {
    <EventExamples/>
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        console.log(book);
    };
    return (
      <>
      
      <h1>amazon best sellers</h1>
<section className='booklist'>    
    {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index} />;
            
    })}
    </section>
    </>
    );
};
 
const EventExamples = () => {
    const handleFormInput = () => {
        console.log('handle form input');
    };
    const handleButtonClick = () => {
        alert('handle button click');
    };
    const handleFormSubmission = (e) => {
        console.log('form submitted');
    };
    return (
    <section>
        <form>
            <h2>Typical Form</h2>
            <input 
            type='text' 
            name='product' 
            onChange={handleFormInput}
            style={{margin: '1rem 0'}}
            />
            <button type='submit'onClick={handleFormSubmission} >submit</button>
        <div>
        <button onClick={handleButtonClick} type='button'>Click me</button>
        </div>
        </form>
        
        </section>
        );

};





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);




