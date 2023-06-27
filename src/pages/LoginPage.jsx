import { useState, useEffect } from 'react';
import axios from '../utils/axios.utils';
import * as common from '../utils/common.utils';
import { useNavigate, Link } from 'react-router-dom';
import ForgetPasswordPage from './ForgetPasswordPage';
import { toast } from 'react-toastify';

function HomePage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(()=>{
    window.SpinnerHide()
    common.removeSession();
  },[])

  const login = async (e) => {
    window.SpinnerShow()
    e.preventDefault();
    if(username.length==0){
      toast.error("Username cannot be empty !");
    }
    else if(password.length==0){
      toast.error("Password cannot be empty !");
    }
    else{
      let body = {
        username: username,
        password: password,
      };
      try {
        const result = await axios.post('accounts/authenticate', body);
        if (result && result.data.success) {
          common.setSession(result.data.data);
          axios.get(`profile/photo`)
          .then((image) => {
            if (image && image.data.success) {
              result.data.data.imageurl=image.data.data.imageurl;
              common.setSession(result.data.data);
              // navigate('/');
              window.location.href = "/";
            }
          })
          .catch((error) => {
            console.log(error)
            toast.error("Login Failed !");
          })
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
      <div className="page-wraper">
        <div className="page-content">
          <div className="banner-wrapper div-background">
            <div className="circle-1"></div>
            <div className="container inner-wrapper">
              <div className="dz-media">
                <img
                  src="/images/logo.webp"
                  alt="logo-image"
                  style={{ maxHeight: '70px', borderRadius: '8px' }}
                />
              </div>
            </div>
          </div>
          
          {showForgetPassword && <ForgetPasswordPage/>}
          {!showForgetPassword &&
          <div className="account-box">
            <div className="container">
              <div className="account-area">
                <h3 className="title">Welcome Back</h3>
                <p>Login with your credentials</p>
                <div className="input-group input-radius mb-3 pt-4">
                  <span className="input-group-text">
                    <i className="fa fa-user" style={{fontSize:"16px"}}></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                </div>
                <div className="mb-3 input-group input-radius">
                  <span className="input-group-text">
                    <i className="fa fa-lock" style={{fontSize:"16px"}}></i>
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control dz-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <span className="input-group-text" onClick={togglePasswordVisibility}>
                    {showPassword ? (
                      <i className="fa fa-eye-slash" style={{fontSize:"13px"}}></i>
                    ) : (
                      <i className="fa fa-eye" style={{fontSize:"13px"}}></i>
                    )}
                  </span>
                </div>
                <div className="input-group">
                  <button
                    type="button"
                    onClick={login}
                    className="btn mt-2 btn-primary w-100 btn-rounded"
                  >
                    Login
                  </button>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                      defaultChecked={true}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Keep Sign In
                    </label>
                  </div>
                  <button type="button" onClick={()=>setShowForgetPassword(true)} className="btn-link">
                    Forgot password?
                  </button>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
}

export default HomePage;
