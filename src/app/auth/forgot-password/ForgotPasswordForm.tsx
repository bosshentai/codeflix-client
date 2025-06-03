'use client';

import { InputField } from '@/app/components/InputField';
import { FormEvent } from 'react';

export function ForgotPasswordForm() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Forgot Password form submitted');
  };

  return (
    <form
      onSubmit={onSubmit}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414]/90 px-4 py-8 shadow-lg'
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Forgot Password</h1>
        <p className='text-sm text-gray-500'>
          We will send you an email to reset your password.{' '}
        </p>
      </div>

      <InputField
        id='email'
        name='email'
        label='Email'
        type='email'
        placeholder='Enter your email'
      />

      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-y-0 sm:space-x-2'>
        <button
          className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 sm:w-auto sm:px-8'
          type='submit'
        >
          Reset Password
        </button>
      </div>
    </form>
  );
}
