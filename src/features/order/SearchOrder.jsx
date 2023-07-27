import { useState } from 'react';

function SearchOrder() {
  const [order, setOrder] = useState('');
  return (
    <form>
      <input
        className="focus-ring w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        type="text"
        value={order}
        placeholder="Search order #"
        onChange={(e) => setOrder(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
