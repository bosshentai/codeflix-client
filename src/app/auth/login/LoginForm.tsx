'use client';
import React, { FormEvent, useState } from 'react';
import { AuthForm } from '@/app/components/AuthForm';
import { useRouter } from 'next/navigation';

type ServerError = {
  error: {
    email?: string[];
    password?: string[];
    undefined?: string[];
  };
};

export default function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<ServerError>({ error: {} });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/auth/login/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // TODO: redirect to home page
        router.push('/');
        return;
      }

      const payload: ServerError = await response.json();

      console.log(payload);
      setErrors(payload);
    } catch (error) {
      console.error(error);

      setErrors({ error: { undefined: ['An unknown error occurred'] } });
    }
  };
  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
