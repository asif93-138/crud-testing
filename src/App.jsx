import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function App() {
  const [count, setCount] = useState([])
  const [delCount, setDelCount] = useState(0)
  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://backend-testing-376j.onrender.com/docs')
    .then(res => res.json())
    .then(data => setCount(data))
  }, [delCount])
  function dataDelete(data) {
    fetch(`https://backend-testing-376j.onrender.com/docs/${data}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if (data.acknowledged) {
          alert('data deleted!');
          setDelCount(delCount + 1);
      }
  })
  }
  function dataUpdate(data) {
    navigate('/update', {state: {docObj : data}});
  }
  return (
    <div className='text-center'>
      <nav className='mb-5'><Link to='/'>Home</Link><Link to='/crud'>Input</Link></nav>
      {
        count.map(x => (<article key={x._id} className='w-75 p-4 my-4 mx-auto border'>
            <p><b>Name:</b> {x.name}</p>
            <p><b>Email:</b> {x.email}</p>
            <p><b>Message:</b> {x.message}</p>
            <p><button className='mx-2' onClick={() => dataUpdate(x)} type='button'>Update</button><button onClick={() => dataDelete(x._id)} type='button' className='mx-2'>Delete</button></p>
        </article>))
      }
    </div>
  )
}

export default App
