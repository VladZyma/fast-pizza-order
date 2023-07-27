import { useState } from 'react';

import Button from '../../ui/Button';

function CreateUser() {
  const [name, setName] = useState('');
  return (
    <form>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mb-8 w-72"
        type="text"
        placeholder="Your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <Button type="primary">START ORDERING</Button>
      </div>
    </form>
  );
}

export default CreateUser;
