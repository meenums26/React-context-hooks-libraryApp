import React,{useContext,useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { addBooks } = useContext(BookContext);
    const [title,setTitle] = useState('');
    const [author,setAuthor] =useState('');
    const [id,setId] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        addBooks(title,author,id);
        setTitle('');
        setAuthor('');
        setId('');
    }
    return (  
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="book title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            <input type="text" placeholder="book author" value={author} onChange={(e)=>setAuthor(e.target.value)} required/>
            <input type="text" placeholder="book Id" value={id} onChange={(e)=>setId(e.target.value)} required/>
            <input type="submit" value="Add Book"/>
        </form>
    );
}
 
export default BookForm;