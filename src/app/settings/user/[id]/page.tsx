import BuggyButton from '@/app/components/BuggyButton';
import { getUserById } from '@/app/lib/settings';
import { notFound } from 'next/navigation';
import React from 'react';

async function User({ params }: { params: { id: string } }) {
  const { name, id, email, username, website } = await getUserById(params.id);

  if (!name) {
    notFound();
  }

  return (
    <div>
      <h1 className='text-2xl'>User {params.id} Page</h1>
      <div>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>UserName: {username}</p>
        <p>Website: {website}</p>
      </div>
      <div className='mt-4'>
        <BuggyButton />
      </div>
    </div>
  );
}

export default User;
