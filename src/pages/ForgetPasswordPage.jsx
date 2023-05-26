import { useState } from 'react';
import axios from '../utils/axios.utils';
import * as common from '../utils/common.utils';
import { Link } from 'react-router-dom';
import OTPPage from './OTPPage';
import { toast } from 'react-toastify';

function HomePage() {
  const [username, setUsername] = useState('');
  const [showOtpConfirm, setShowOtpConfirm] = useState(false);

  const handleSendOtp = async (e) => {
    window.SpinnerShow()
    e.preventDefault();
    if (username.length == 0) {
      toast.error("Username cannot be empty !");
      return;
    }
    else{
      let body = {
        username: username
      };
      try {
        const result = await axios.post('accounts/forgot-password-otp', body);
        if (result && result.data.success) {
          toast.success(result.data.data.message);
          setShowOtpConfirm(true)
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
      {showOtpConfirm && <OTPPage username={username}/>}
      {!showOtpConfirm &&
        <div className="account-box">
          <div className="container">
            <div className="account-area">
              <div className="mb-3 input-group input-mini">
                <span className="input-group-text"><i className="fa-solid fa-user" style={{fontSize:"16px"}}></i></span>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Enter Your username" />
              </div>
              <div className="input-group">
                <button className="btn mt-2 btn-primary w-100 btn-rounded" onClick={handleSendOtp}>SEND OTP</button>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check">
                  <Link to={'/'} type="button" className="btn-link">
                    Go Back
                  </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default HomePage;
