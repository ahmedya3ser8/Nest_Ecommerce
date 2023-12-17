import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mail = JSON.parse(localStorage.getItem('email')!);
  const pass = JSON.parse(localStorage.getItem('password')!);

  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(mail === email && pass === password) {
      toast.success('Success', {
        position: 'bottom-left',
        autoClose: 1000,
      });
      navigate('/');
    } else {
      toast.error('invalid email or password', {
        position: 'bottom-left',
        autoClose: 1000,
      });
    }
  }
  return (
    <div className="login-form w-full lg:w-[600px] h-[270px] m-auto p-5 rounded-[10px] border-[1px] border-solid border-[#ccc]">
      <form className="mb-4">
        <div className="mb-2">
          <label className="block mb-1 text-[#777]" htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" className="h-[40px] w-full border-[1px] border-solid border-[#ccc] outline-none p-2 rounded-[10px]" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="block mb-1 text-[#777]" htmlFor="password">Password *</label>
          <input type="password" id="password" name="password" className="h-[40px] w-full border-[1px] border-solid border-[#ccc] outline-none p-2 rounded-[10px]" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="block w-full p-2 bg-[#3cb47c] text-white rounded-[10px]" onClick={handleLogin}>login</button>
      </form>
      <div className="text-center text-[#777]">
        You have an account? 
        <Link to={'/register'} className="text-[#3cb47c] ml-1">register</Link>
      </div>
    </div>
  )
}

export default LoginForm;