import BuggyButton from '@/app/components/BuggyButton';
import { getUserInfo } from '@/app/lib/settings';
import React from 'react';

async function User() {
  const { name, email, age } = await getUserInfo();

  return (
    <div>
      <h1 className='text-2xl'>User Page</h1>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
      </div>
      <div className='mt-4'>
        <BuggyButton />
      </div>
    </div>
  );
}

export default User;
