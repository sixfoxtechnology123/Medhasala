import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', accessCode: '' });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <input name="name" type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Full Name" />
            <input name="email" type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Email address" />
            <input name="password" type="password" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Password" />
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <label className="block text-sm font-medium text-blue-700">Have an Access Code?</label>
              <input 
                name="accessCode" 
                type="text" 
                className="mt-1 w-full px-3 py-2 border border-blue-300 rounded-md focus:ring-blue-500" 
                placeholder="e.g. COACHING-2026" 
              />
              <p className="text-xs text-blue-500 mt-2 italic">Required for private coaching students only.</p>
            </div>
          </div>
          <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;