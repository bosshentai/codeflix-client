'use client';

import { useState } from 'react';

export default function BuggyButton() {
  const [clicked, setClicked] = useState(false);

  if (clicked) {
    throw new Error('Oh no! Something went wrong!');
  }

  return (
    <button
      className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
      onClick={() => setClicked(true)}
    >
      Trigger Error
    </button>
  );
}
