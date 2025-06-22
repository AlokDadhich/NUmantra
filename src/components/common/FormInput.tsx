import React from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function FormInput({ label, error, className = '', ...props }: FormInputProps) {
  return (
    <div className="form-group">
      {label && (
        <label className="form-label">
          {label}
        </label>
      )}
      <input 
        className={`form-control ${error ? 'error' : ''} ${className}`}
        {...props}
      />
      {error && (
        <span className="error-text">{error}</span>
      )}
    </div>
  );
}