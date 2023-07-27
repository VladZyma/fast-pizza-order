import {useState} from 'react';

function SearchOrder() {
  const [order, setOrder] = useState('');
  return (
    <input type='text' value={order} placeholder='Search order #' onChange={(e) => setOrder(e.target.value)}/>
  )
}

export default SearchOrder
