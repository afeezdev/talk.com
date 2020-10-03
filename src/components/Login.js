import React from "react";

import "./login.css";


const Login = () => (
    <div className="light login">
      <form>
        <div className="theme-toggle">
		      <input type="button" id="theme-toggle-btn" />
		      <label for="theme-toggle-btn">
			      <i class="fas fa-moon toggle-icon"></i>
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
  );
export default Login;
