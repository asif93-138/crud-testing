import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate = useNavigate();
    const location = useLocation();
    function updateReq(event) {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        
        fetch(`https://backend-testing-376j.onrender.com/docs/${location.state.docObj._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message: message})
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                alert('data updated!');
                navigate('/');
            }
        })
    }
    return (
        <div className='text-center'>
            <nav><Link to='/'>Home</Link><Link to='/crud'>Input</Link></nav>
            <div className='my-4'>
                <p><b>Name :</b> {location.state.docObj.name}</p>
                <p><b>Email :</b> {location.state.docObj.email}</p>
            </div>
            <form onSubmit={updateReq} className='w-50 mx-auto'>
                <h4>Update your message : </h4>
                <textarea name='message' placeholder={location.state.docObj.message} className='form-control mt-3' rows="5"></textarea><br />
                <button type='submit'>Submit</button> 
            </form>
        </div>
    );
};

export default Update;