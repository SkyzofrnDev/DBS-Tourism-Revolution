import React, { useState } from 'react';

const Login = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='px-36 h-screen w-screen bg-[url("/Image/AuthBg.svg")] bg-cover flex justify-end items-center'>
      <div className="px-16 py-20 bg-white rounded-3xl w-1/2">
        <p className="text-4xl "><b>Welcome Back to VistaNusa!</b></p>
        <form action="POST" className="mt-10">
          <div className="relative mt-10">
            <label className={`absolute left-4 transition-all duration-200 ${email.length > 0 || emailFocused ? 'text-black top-[-25px] left-2 text-lg' : 'text-black/50 top-4 left-4 text-lg'}`}>
              Email
            </label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              className="rounded-full border-2 border-black/20 p-2 px-5 w-full mt-2"
            />
          </div>
          <div className="relative mt-10">
            <label className={`absolute left-4 transition-all duration-200 ${password.length > 0 || passwordFocused ? 'text-black top-[-25px] left-2 text-lg' : 'text-black/50 top-4 left-4 text-lg'}`}>
              Password
            </label>
            <input
              type="text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              className="rounded-full border-2 border-black/20 p-2 px-5 w-full mt-2"
            />
          </div>
          <button type="submit" className='bg-black text-white w-full py-5 text-lg rounded-full mt-14'>Login Now !</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
