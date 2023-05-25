import { useState } from 'react';
import axios from '../utils/axios.utils';
import * as common from '../utils/common.utils';
import { useNavigate } from 'react-router-dom';
import ForgetPasswordPage from './ForgetPasswordPage';
import { toast } from 'react-toastify';

function HomePage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  

  const login = async (e) => {
    e.preventDefault();
    if (username.length == 0) {
      toast.error("Username cannot be empty !");
      return;
    }
    else if (password.length == 0) {
      toast.error("Password cannot be empty !");
      return;
    }
    let body = {
      username: username,
      password: password,
    };
    try {
      const result = await axios.post('accounts/authenticate', body);
      if (result && result.data.success) {
        common.setSession(result.data.data);
        navigate('/');
      } else {
        toast.error(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
      
      <div className="account-box">
        <div className="container">
            <div className="account-area">
                <div method="get" id="otp" className="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off">
                    <input className="form-control" type="text" id="digit-1" name="digit-1" placeholder="-" data-next="digit-2" />
                    <input className="form-control" type="text" id="digit-2" name="digit-2" placeholder="-" data-next="digit-3" data-previous="digit-1" />
                    <input className="form-control" type="text" id="digit-3" name="digit-3" placeholder="-" data-next="digit-4" data-previous="digit-2" />
                    <input className="form-control" type="text" id="digit-4" name="digit-4" placeholder="-" data-next="digit-5" data-previous="digit-3" />
                    <input className="form-control" type="text" id="digit-5" name="digit-5" placeholder="-" data-next="digit-6" data-previous="digit-4" />
                    <input className="form-control" type="text" id="digit-6" name="digit-6" placeholder="-" data-previous="digit-5" />
                </div>                
                <div className="input-group">
                    <button type="button" className="btn mt-3 btn-primary w-100 btn-rounded">VERIFY & PROCEED</button>
                </div>
            </div>
        </div>
    </div>
        
  );
}

export default HomePage;
