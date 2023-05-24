import { useState } from 'react'
import axios from '../utils/axios.utils'
import * as common from '../utils/common.utils'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function HomePage() {
  const navigate = useNavigate();
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();

  const login = async (e) =>{
    e.preventDefault();
    let body ={
      username:username,   
      password: password,
  }
    await axios.post('accounts/authenticate',body)
    .then((result)=>{
      // localStorage.setItem("username","asiq")
      // navigate('/')
      if(result && result.data.success){
        common.setSession(result.data.data);
        navigate('/');
      }
      else{
        toast.error(result.data.message)
      }
    })
    .catch((error)=>{
      console.log(error)
    })
    
  }

  return (
    <>
      {/* <ThemeSettings/> */}
      <div className="page-wraper">

        <div className="page-content">

          <div className="banner-wrapper div-background">
            <div className="circle-1"></div>
            <div className="container inner-wrapper">
              {/* <h1 className="dz-title">DTrans</h1>
              <h5 className="mb-0">Staff App</h5> */}
              <div className="dz-media">
                <img src="/images/logo.jpeg" alt="logo-image" style={{maxHeight:"70px", borderRadius:"20px"}}/>
              </div>
            </div>
          </div>
          <div className="account-box">
            <div className="container">
              <div className="account-area">
                <h3 className="title">Welcome Back</h3>
                <p>Login with your credentials</p>
                <div className="input-group input-mini mb-3 pt-4">
                  <span className="input-group-text"><i className="fa fa-user"></i></span>
                  <input type="text" className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                </div>
                <div className="mb-3 input-group input-mini">
                  <span className="input-group-text"><i className="fa fa-lock"></i></span>
                  <input type="password" className="form-control dz-password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                  <span className="input-group-text show-pass"> 
                    <i className="fa fa-eye-slash"></i>
                    <i className="fa fa-eye"></i>
                  </span>
						    </div>
                  <div className="input-group">
                    <button type='button' onClick={login} className="btn mt-2 btn-primary w-100 btn-rounded">Login</button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked={true} />
                      <label className="form-check-label" htmlFor="flexCheckChecked">
                        Keep Sign In
                      </label>
                    </div>
                    <a href="#" className="btn-link">Forgot password?</a>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default HomePage
