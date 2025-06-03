'use client';
import React from 'react';
import { AuthForm } from '@/app/components/AuthForm';

export default function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('submit');
    event.preventDefault();
    // Handle login logic here
  };
  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
