import React,{ createContext,useState } from 'react';
//import uuid from 'uuid/dist/esm-node/v1'
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,setBooks] =useState([
        {title:"The Great Indian Novel",author:"Shashi Tharoor",id:1},
        {title:"White Tiger",author:"Arvind Adiga",id:2},
        {title:"The Palace of Illusions",author:"Chitra Banerjee Divakaruni",id:3}
    ]);
    const addBooks = (title,author,id) =>{
        setBooks([...books,{title,author,id}]);
    };
    const removeBooks = (id) =>{
        setBooks(books.filter(book=>book.id !== id));
    };
    return ( 
    <BookContext.Provider value={{books,addBooks,removeBooks}}>
    {props.children}
    </BookContext.Provider> 
    );
}
 
export default BookContextProvider;