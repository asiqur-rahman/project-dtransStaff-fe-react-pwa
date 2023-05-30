import { useState, useEffect, useRef } from 'react';
import axios from '../utils/axios.utils';
import ResetPasswordPage from './ResetPasswordPage';
import { toast } from 'react-toastify';

function HomePage(props) {
  const [username, setUsername] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);

  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');

  useEffect(() => {
    setUsername(props.username)
  }, [props])

  const otpConfirm = async (e) => {
    window.SpinnerShow()
    e.preventDefault();
    if (otp1.length == 0 || otp2.length == 0 || otp3.length == 0 || otp4.length == 0) {
      toast.error("Please provide OTP");
      return;
    }
    else {
      let body = {
        username: username,
        otp: otp1 + otp2 + otp3 + otp4,
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

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleOtpChange = (index, value) => {
    switch (index) {
      case 0:
        setOtp1(value);
        if (value.length === 1) {
          inputRefs[1].current.focus();
        }
        break;
      case 1:
        setOtp2(value);
        if (value.length === 1) {
          inputRefs[2].current.focus();
        }
        break;
      case 2:
        setOtp3(value);
        if (value.length === 1) {
          inputRefs[3].current.focus();
        }
        break;
      case 3:
        setOtp4(value);
        break;
      default:
        break;
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && event.target.value === '') {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  return (
    <>
      {showResetPassword && <ResetPasswordPage username={username} otp={otp1 + otp2 + otp3 + otp4} />}
      {!showResetPassword &&
        <div className="account-box">
          <div className="container">
            <div className="account-area">
              <div method="get" id="otp" className="digit-group" data-group-name="digits" data-autosubmit="false" autoComplete="off">
                <input
                  className="form-control"
                  value={otp1}
                  maxLength={1}
                  onChange={(e) => handleOtpChange(0, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(0, e)}
                  type="text"
                  ref={inputRefs[0]}
                  placeholder="-"
                />
                <input
                  className="form-control"
                  value={otp2}
                  maxLength={1}
                  onChange={(e) => handleOtpChange(1, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(1, e)}
                  type="text"
                  ref={inputRefs[1]}
                  placeholder="-"
                />
                <input
                  className="form-control"
                  value={otp3}
                  maxLength={1}
                  onChange={(e) => handleOtpChange(2, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(2, e)}
                  type="text"
                  ref={inputRefs[2]}
                  placeholder="-"
                />
                <input
                  className="form-control"
                  value={otp4}
                  maxLength={1}
                  onChange={(e) => handleOtpChange(3, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(3, e)}
                  type="text"
                  ref={inputRefs[3]}
                  placeholder="-"
                />
              </div>
              <div className="input-group">
                <button type="button" className="btn mt-3 btn-primary w-100 btn-rounded" onClick={otpConfirm}>
                  VERIFY & PROCEED
                </button>
              </div>
            </div>
          </div>
        </div>
      }</>
  );
}

export default HomePage;
