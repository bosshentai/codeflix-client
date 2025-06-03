import React, { FC } from 'react';

export type InputFieldProps = {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
};

export const InputField: FC<InputFieldProps> = ({
  id,
  name,
  label,
  type,
  placeholder,
}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={name} className='text-sm font-semibold text-gray-500'>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-red-500 focus:outline-none'
      />
    </div>
  );
};
