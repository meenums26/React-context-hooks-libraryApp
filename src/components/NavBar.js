import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
    const { books } = useContext(BookContext);
    return ( 
    <div className="navbar">
        <h1>Reading Corner</h1>
        <p>Currently you have { books.length } of books to get through...</p>
    </div>
     );
}
 
export default NavBar;