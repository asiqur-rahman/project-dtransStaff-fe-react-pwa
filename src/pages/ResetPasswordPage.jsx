import { useState, useEffect } from 'react';
import axios from '../utils/axios.utils';
import { useNavigate } from 'react-router-dom';
import OTPPage from './OTPPage';
import { toast } from 'react-toastify';

function HomePage(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [showOtpConfirm, setShowOtpConfirm] = useState(false);

  useEffect(()=>{
    setUsername(props.username)
    setOtp(props.otp)
  },[props])

  const handleResetPassword = async (e) => {
    window.SpinnerShow()
    e.preventDefault();
    if (password.length==0 || cPassword.length==0) {
      toast.error("Password and Confirm password can't be empty !");
    }
    else if (password.length<8) {
      toast.error("Minimum password length is 8.");
    }
    else if (password != cPassword) {
      toast.error("Password and Confirm password must be same !");
    }
    else{
      let body = {
        username: username,
        otp: otp,
        password: password,
        confirmPassword: cPassword,
      };
      try {
        const result = await axios.post('accounts/reset-password-otp', body);
        console.log('Result',result)
        if (result && result.data.success) {
          toast.success(result.data.data.message);
          navigate('/');
        } else {
          toast.error(result.message ?? result.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    window.SpinnerHide()
  };

  return (
    <>
        <div className="account-box">
          <div className="container">
            <div className="account-area">
              <div className="mb-3 input-group input-mini">
                <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Enter Your password" />
              </div>
              <div className="mb-3 input-group input-mini">
                <span className="input-group-text"><i className="fa-solid fa-lock"></i></span>
                <input type="password" value={cPassword} onChange={(e)=>setCPassword(e.target.value)} className="form-control" placeholder="Confirm Your password" />
              </div>
              <div className="input-group">
                <button className="btn mt-2 btn-primary w-100 btn-rounded" onClick={handleResetPassword}>Reset Password</button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default HomePage;
