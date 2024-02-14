import React from 'react';
import { Link } from 'react-router-dom';

const CRUD = () => {
    function formInput(event) {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const formObj = {name, email, message};
        fetch('https://backend-testing-376j.onrender.com/docs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formObj)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                alert('data recorded!');
                form.reset();
            }
        })
    }
    return (
        <div className='text-center'>
            <nav><Link to='/'>Home</Link><Link to='/crud'>Input</Link></nav>
            <form onSubmit={formInput} className='w-50 mx-auto mt-5'>
                <p>Name : </p>
                <input type='text' className='form-control' name='name' placeholder='Name' />
                <p>Email : </p>
                <input type='email' className='form-control' name='email' placeholder='Email' />
                <p>Message : </p>
                <textarea name='message' placeholder='Message' className='form-control' rows="5"></textarea><br />
                <button type='submit'>Submit</button> 
            </form>
        </div>
    );
};

export default CRUD;