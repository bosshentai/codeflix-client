'use client';
import React, { useEffect } from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Error occurred:', error);
  }, [error]);

  return (
    <div className='text-red-500'>
      <h1 className='text-2xl font-bold'>Error Page</h1>
      <div className='birder-dashed border border-red-500 p-4'>
        <p>Something went wrong</p>
      </div>
    </div>
  );
}
