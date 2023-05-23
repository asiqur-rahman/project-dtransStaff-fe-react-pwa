import { useState } from 'react'
import axios from '../utils/axios.utils'
import * as common from '../utils/common.utils'
import { toast } from 'react-toastify';

function HomePage() {
  const [username,setUsername] = useState();
  const [password,setPassword] = useState();

  const login = async (e) =>{
    e.preventDefault();
    let body ={
      username:username,   
      password: password,
  }
    await axios.post('authenticate',body)
    .then((result)=>{
      localStorage.setItem("username","asiq")
      window.location.href = '/';
      if(result){

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

          <div className="banner-wrapper">
            <div className="circle-1"></div>
            <div className="container inner-wrapper">
              <h1 className="dz-title">DTrans</h1>
              <p className="mb-0">Staff App</p>
            </div>
          </div>
          <div className="account-box">
            <div className="container">
              <div className="account-area">
                <h3 className="title">Welcome Back</h3>
                <p>Login with your phone number</p>
                <div className="input-group input-mini mb-3">
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

        <footer className="footer fixed">
          <div className="container">
            <a href="signup.html" className="btn btn-transparent btn-rounded d-block">CREATE AN ACCOUNT</a>
          </div>
        </footer>

        <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom">
          <div className="offcanvas-body small">
            <ul className="theme-color-settings">
              <li>
                <input className="filled-in" id="primary_color_8" name="theme_color" type="radio" value="color-primary" />
                <label htmlFor="primary_color_8"></label>
                <span>Default</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_2" name="theme_color" type="radio" value="color-green" />
                <label htmlFor="primary_color_2"></label>
                <span>Green</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_3" name="theme_color" type="radio" value="color-blue" />
                <label htmlFor="primary_color_3"></label>
                <span>Blue</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_4" name="theme_color" type="radio" value="color-pink" />
                <label htmlFor="primary_color_4"></label>
                <span>Pink</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_5" name="theme_color" type="radio" value="color-yellow" />
                <label htmlFor="primary_color_5"></label>
                <span>Yellow</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_6" name="theme_color" type="radio" value="color-orange" />
                <label htmlFor="primary_color_6"></label>
                <span>Orange</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_7" name="theme_color" type="radio" value="color-purple" />
                <label htmlFor="primary_color_7"></label>
                <span>Purple</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_1" name="theme_color" type="radio" value="color-red" />
                <label htmlFor="primary_color_1"></label>
                <span>Red</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_9" name="theme_color" type="radio" value="color-lightblue" />
                <label htmlFor="primary_color_9"></label>
                <span>Lightblue</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_10" name="theme_color" type="radio" value="color-teal" />
                <label htmlFor="primary_color_10"></label>
                <span>Teal</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_11" name="theme_color" type="radio" value="color-lime" />
                <label htmlFor="primary_color_11"></label>
                <span>Lime</span>
              </li>
              <li>
                <input className="filled-in" id="primary_color_12" name="theme_color" type="radio" value="color-deeporange" />
                <label htmlFor="primary_color_12"></label>
                <span>Deeporange</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
