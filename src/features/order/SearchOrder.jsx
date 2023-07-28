import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!orderId) return;

    navigate(`/order/${orderId}`);
    setOrderId('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="focus-ring w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        type="text"
        value={orderId}
        placeholder="Search order #"
        onChange={(e) => setOrderId(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
