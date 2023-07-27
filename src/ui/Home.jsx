import {useState} from 'react';

function Home() {
  const [name, setName] = useState('');

  return (
    <div>
      <h1>
        The best pizza.
        <br/>
        Straight out of the oven, straight to you. 
      </h1>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input type='text' placeholder='Your full name' value={name} onChange={(e) => setName(e.target.value)}/>
      <button>START ORDERING</button>
    </div>
  )
}

export default Home
