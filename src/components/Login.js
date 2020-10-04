import React, { useState } from "react";

import "./login.scss";


const Login = () => {
  const [ theme, setTheme ] = useState(true)

  const themeToggle = () => {
    theme ? setTheme(false) : setTheme(true)
  }

  return (
    <div className= { theme ? 'light' : 'dark' } >
      <form>
        <div className="theme-toggle">
		      <input type="button" id="theme-toggle-btn"  onClick={themeToggle} />
		      <label for="theme-toggle-btn">
			      <i class={theme ? "fas fa-moon toggle-icon" : "fas fa-sun toggle-icon"}></i>
		      </label>
	      </div>
        <h1> sign in </h1>
	      <div class="social-media-list">
		      <a href="#"><i class="fab fa-facebook-f"></i></a>
		      <a href="#"><i class="fab fa-google"></i></a>
		      <a href="#"><i class="fab fa-linkedin-in"></i></a>
	      </div>
      	<div class="input-group">
		      <label for="email-input"> Email </label>
		      <input type="email" id="email-input" autocomplete="off" />
	      </div>
	      <div class="input-group">
		      <label for="password-input"> Password </label>
		      <input type="password" id="password-input" autocomplete="off" />
    	  </div>
	      <a href="#" class="forgot-password">forgot password ?</a>
	      <button class="signIn-btn">Sign in</button>
      </form>
    </div>
  )
};
export default Login;
