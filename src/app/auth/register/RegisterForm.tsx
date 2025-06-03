'use client';
import React from 'react';
import { AuthForm } from '@/app/components/AuthForm';

export default function RegisterForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert('Submit from register');
    event.preventDefault();
    // Handle login logic here
  };
  return <AuthForm formType='register' onSubmit={handleSubmit} />;
}
