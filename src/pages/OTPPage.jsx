import { useState, useEffect } from 'react';
import axios from '../utils/axios.utils';
import * as common from '../utils/common.utils';
import { useNavigate } from 'react-router-dom';
import ResetPasswordPage from './ResetPasswordPage';
import { toast } from 'react-toastify';

function HomePage(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  
  useEffect(()=>{
    setUsername(props.username)
  },[props])

  const otpConfirm = async (e) => {
    window.SpinnerShow()
    e.preventDefault();
    if (otp1.length == 0 || otp2.length == 0 || otp3.length == 0 || otp4.length == 0) {
      toast.error("Please provide OTP");
      return;
    }
    else{
      let body = {
        username: username,
        otp: otp1+otp2+otp3+otp4,
      };
      try {
        const result = await axios.post('accounts/validate-reset-otp', body);
        if (result && result.data.success) {
          toast.success("OTP Verified. Please enter your new password.");
          setShowResetPassword(true);
        } else {
          toast.error(result.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    window.SpinnerHide()
  };

  return (
      <>
      {showResetPassword && <ResetPasswordPage username={username} otp={otp1+otp2+otp3+otp4}/>}
      {!showResetPassword && 
      <div className="account-box">
        <div className="container">
            <div className="account-area">
                <div method="get" id="otp" className="digit-group" data-group-name="digits" data-autosubmit="false" autoComplete="off">
                    <input className="form-control" value={otp1} maxLength={1} onChange={(e)=>setOtp1(e.target.value)} type="text" id="digit-1" name="digit-1" placeholder="-" data-next="digit-2" />
                    <input className="form-control" value={otp2} maxLength={1} onChange={(e)=>setOtp2(e.target.value)} type="text" id="digit-2" name="digit-2" placeholder="-" data-next="digit-3" data-previous="digit-1" />
                    <input className="form-control" value={otp3} maxLength={1} onChange={(e)=>setOtp3(e.target.value)} type="text" id="digit-3" name="digit-3" placeholder="-" data-next="digit-4" data-previous="digit-2" />
                    <input className="form-control" value={otp4} maxLength={1} onChange={(e)=>setOtp4(e.target.value)} type="text" id="digit-4" name="digit-4" placeholder="-" data-next="digit-5" data-previous="digit-3" />
                </div>                
                <div className="input-group">
                    <button type="button" className="btn mt-3 btn-primary w-100 btn-rounded" onClick={otpConfirm}>VERIFY & PROCEED</button>
                </div>
            </div>
        </div>
    </div>
    }</>
  );
}

export default HomePage;
