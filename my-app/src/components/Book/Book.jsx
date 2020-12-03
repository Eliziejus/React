import React from 'react';
import './book.css';

export default function Book() {
    return (
        <div className='oneBook'>
            <Image/>
            <Author/>
            <Title/>
            <Price/>
            
        </div>
    )
}
const Image = () => <img src="https://lithub.com/wp-content/uploads/2019/11/A1NfEjobJnL-691x1024.jpg"/>
const Author = () => <h2>Solar bone</h2>
const Title = () => <h3>Visiskai naujas</h3>
const Price = () => <p>tik 10 $</p>