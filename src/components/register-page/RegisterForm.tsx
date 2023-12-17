import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function RegisterForm() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    let confirmPassword;

    if(password === confirmation) {
      confirmPassword = true;
    } else {
      toast.error('password not matched', {
        position: 'bottom-left',
        autoClose: 1000,
      });
    }
  
    if(username == '' && email == '' && password == '' && confirmation == '') {
      toast.error('Check All Inputs', {
        position: 'bottom-left',
        autoClose: 1000,
      });
    } else if(username && email && password && confirmPassword) {
      localStorage.setItem('username', JSON.stringify(username));
      localStorage.setItem('email', JSON.stringify(email));
      localStorage.setItem('password', JSON.stringify(password));
      toast.success('Success Validate', {
        position: 'bottom-left',
        autoClose: 1000,
      });
      navigate('/login');
    } else {
      toast.error('invalid email or password', {
        position: 'bottom-left',
        autoClose: 1000,
      });
    }
  }
  return (
    <div className="register-form w-full lg:w-[600px] h-[420px] m-auto p-5 rounded-[10px] border-[1px] border-solid border-[#ccc]">
      <form className="mb-4">
        <div className="mb-2">
          <label className="block mb-1 text-[#777]" htmlFor="username">Username *</label>
          <input type="text" id="username" name="username" className="h-[40px] w-full border-[1px] border-solid border-[#ccc] outline-none p-2 rounded-[10px]" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="mb-2">
          <label className="block mb-1 text-[#777]" htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" className="h-[40px] w-full border-[1px] border-solid border-[#ccc] outline-none p-2 rounded-[10px]" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-2">
          <label className="block mb-1 text-[#777]" htmlFor="password">Password *</label>
          <input type="password" id="password" name="password" className="h-[40px] w-full border-[1px] border-solid border-[#ccc] outline-none p-2 rounded-[10px]" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="block mb-1 text-[#777]" htmlFor="confirmation">Confirm password *</label>
          <input type="password" id="confirmation" name="confirmation" className="h-[40px] w-full border-[1px] border-solid border-[#ccc] outline-none p-2 rounded-[10px]" onChange={(e) => setConfirmation(e.target.value)} />
        </div>
        <button className="block w-full p-2 bg-[#3cb47c] text-white rounded-[10px]" onClick={handleSubmit}>Sign Up</button>
      </form>
      <div className="text-center text-[#777]">
        You have an account? 
        <Link to={'/login'} className="text-[#3cb47c] ml-1">login</Link>
      </div>
    </div>
  )
}

export default RegisterForm;