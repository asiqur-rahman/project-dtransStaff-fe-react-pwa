import { useState } from 'react';
import axios from '../utils/axios.utils';
import * as common from '../utils/common.utils';
import { useNavigate } from 'react-router-dom';
import OTPPage from './OTPPage';
import { toast } from 'react-toastify';

function HomePage() {
  const [username, setUsername] = useState('');
  const [showOtpConfirm, setShowOtpConfirm] = useState(false);

  const handleSendOtp = async (e) => {
    setShowOtpConfirm(true);
    e.preventDefault();
    if (username.length == 0) {
      toast.error("Username cannot be empty !");
      return;
    }
    let body = {
      username: username
    };
    try {
      const result = await axios.post('accounts/authenticate', body);
      if (result && result.data.success) {
        toast.success("OTP sended successfully !");
        setShowOtpConfirm(true)
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showOtpConfirm && <OTPPage />}
      {!showOtpConfirm &&
        <div className="account-box">
          <div className="container">
            <div className="account-area">
              <div className="mb-3 input-group input-mini">
                <span className="input-group-text"><i className="fa-solid fa-mobile-screen-button"></i></span>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-control" placeholder="Enter Your username" />
              </div>
              <div className="input-group">
                <button className="btn mt-2 btn-primary w-100 btn-rounded" onClick={handleSendOtp}>SEND OTP</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default HomePage;
