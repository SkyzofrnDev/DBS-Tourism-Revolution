import React, { useState } from 'react';

const Register = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='px-36 h-screen w-screen bg-[url("/Image/AuthBg.svg")] bg-cover flex justify-end items-center'>
      <div className="px-16 py-20 bg-white rounded-3xl w-1/2">
        <p className="text-4xl ">
          <b>Welcome to VistaNusa!</b>
        </p>
        <form action="POST" className="mt-10">
          <div className="relative mt-10 flex gap-10">
            <label
              className={`absolute select-none left-4 transition-all duration-200 ${firstName.length > 0 || firstNameFocused ? 'text-black top-[-25px] left-2 text-lg' : 'text-black/50 top-4 left-4 text-lg'}`}
            >
              First Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={() => setFirstNameFocused(false)}
              onFocus={() => setFirstNameFocused(true)}
              className="rounded-full border-2 border-black/20 p-2 px-5 w-full mt-2"
            />
            <label
              className={`absolute select-none left-96 transition-all duration-200 ${lastName.length > 0 || lastNameFocused ? 'text-black top-[-25px] left-96 text-lg' : 'text-black/50 top-4 left-4 text-lg'}`}
            >
              Last Name ( optional )
            </label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onFocus={() => setLastNameFocused(true)}
              onBlur={() => setLastNameFocused(false)}
              className="rounded-full border-2 border-black/20 p-2 px-5 w-full mt-2"
            />
          </div>
          <div className="relative mt-10">
            <label
              className={`absolute left-4 transition-all duration-200 ${email.length > 0 || emailFocused ? 'text-black top-[-25px] left-2 text-lg' : 'text-black/50 top-4 left-4 text-lg'}`}
            >
              Email <span className="text-red-600">*</span>
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
            <label
              className={`absolute left-4 transition-all duration-200 ${password.length > 0 || passwordFocused ? 'text-black top-[-25px] left-2 text-lg' : 'text-black/50 top-4 left-4 text-lg'}`}
            >
              Password <span className="text-red-600">*</span>
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
          <div className="flex gap-5 ml-3 mt-5">
            <input type="checkbox" className="w-5 " />{' '}
            <p>I Agree to the Terms and Conditions</p>
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full py-5 text-lg rounded-full mt-5"
          >
            Login Now !
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
