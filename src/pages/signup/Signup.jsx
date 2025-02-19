import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: ''
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load the reCAPTCHA script
    const recaptchaScript = document.createElement('script');
    recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
    recaptchaScript.async = true;
    recaptchaScript.defer = true;
    document.head.appendChild(recaptchaScript);

    const googleScript = document.createElement('script');
    googleScript.src = 'https://accounts.google.com/gsi/client';
    googleScript.async = true;
    googleScript.defer = true;
    googleScript.onload = initializeGoogleSignIn;
    document.head.appendChild(googleScript);

    return () => {
      if (document.head.contains(recaptchaScript)) {
        document.head.removeChild(recaptchaScript);
      }
      if (document.head.contains(googleScript)) {
        document.head.removeChild(googleScript);
      }
    };
  }, []);

  // Create a function to initialize Google Sign In
  const initializeGoogleSignIn = () => {
    if (window.google && window.google.accounts) {
      window.google.accounts.id.initialize({
        client_id: "349488632873-mk2mu8pkrhba44iqlne1m882pva74see.apps.googleusercontent.com",
        callback: handleGoogleSignIn
      });

      // Render the standard Google button
      window.google.accounts.id.renderButton(
        document.getElementById('g_id_signin'),
        { 
          theme: 'outline', 
          size: 'large',
          text: 'continue_with',
          width: '100%',
          type: 'standard'
        }
      );
    } else {
      // If Google isn't available yet, try again in a moment
      setTimeout(initializeGoogleSignIn, 100);
    }
  };

  const handleGoogleSignIn = (response) => {
    console.log('Google Sign-In successful:', response);
    
    // Extract the credential token
    const credential = response.credential;
    
    // Send the token to your backend
    fetch("http://localhost:5000/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ credential })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Authentication successful:", data);
      // Store user info/token in local storage or context
      // Redirect to the dashboard or home page
      navigate("/dashboard");
    })
    .catch(error => {
      console.error("Authentication error:", error);
      // Display error message to user
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    //val pass
    if (name === 'password') {
      validatePassword(value, formData.confirmPassword);
    } else if (name === 'confirmPassword') {
      validatePassword(formData.password, value);
    }
  };

  const validatePassword = (password, confirmPassword) => {
    let newErrors = { ...errors };
    
    //pass len
    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else {
      newErrors.password = '';
    }
    
    //pass match
    if (password && confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    } else {
      newErrors.confirmPassword = '';
    }
    
    setErrors(newErrors);
  };

  const handleCaptchaVerify = () => {
    setCaptchaVerified(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //Final validation
    validatePassword(formData.password, formData.confirmPassword);
    
    //validation errors
    if (errors.password || errors.confirmPassword || formData.password.length < 8 || formData.password !== formData.confirmPassword) {
     
      document.getElementsByName('password')[0].focus();
      return;
    }
    
    if (!captchaVerified) {
      alert('Please verify that you are not a robot');
      return;
    }

    navigate("/verify-otp", { state: { email: formData.email } });
    
    const {firstName, lastName, email, password, role} = formData;

    console.log(email);

    //sending email
    try {
      const response = await fetch("http://localhost:5000/api/send-otp", {
        method: "POST",
        headers: {
          "content-type": 'application/json'
        },
        body: JSON.stringify({
          email: email,
        })
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await fetch("http://localhost:5000/signUp", {
        method: "POST",
        headers: {
          "content-type": 'application/json'
        },
        body: JSON.stringify({
          fname: firstName,
          lname: lastName,
          email: email,
          password: password,
          role: role
        })
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.log(error.message);
    }

    console.log('Form submitted:', formData);
  };

  //reCAPTCHA callback
  window.onRecaptchaSuccess = () => {
    handleCaptchaVerify();
  };

  window.onRecaptchaExpired = () => {
    setCaptchaVerified(false);
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left side with background image */}
      <div className="hidden md:flex md:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg-img.png')"
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-white">
          <h1 className="text-4xl font-mono tracking-[0.3em] mb-16">
            A N A L Y T I C S
          </h1>
          <h2 className="text-2xl font-mono mb-4">
            Get Started with Us
          </h2>
          <p className="text-blue-200 text-center font-mono text-sm">
            Complete the registration of your account
          </p>
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-6 py-12">
          <div className="mb-12">
            <h2 className="text-2xl text-white font-mono  pt-28">Sign Up Account</h2>
            <p className="text-gray-500 font-mono text-sm">
              Enter your personal data to create your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white font-mono mb-2" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white font-mono mb-2" htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none rounded-lg"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white font-mono mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none rounded-lg"
                required
              />
            </div>

            <div className="space-y-1">
              <div>
                <label className="block text-sm text-white font-mono mb-2" htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full bg-gray-900 border ${errors.password ? 'border-red-500' : 'border-gray-800'} text-white px-4 py-2 font-mono text-sm focus:outline-none rounded-lg`}
                  required
                />
                {errors.password ? (
                  <p className="text-red-500 text-xs font-mono mt-1">{errors.password}</p>
                ) : (
                  <p className="text-gray-600 text-xs font-mono mt-1">Must be at least 8 characters</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm text-white font-mono mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full bg-gray-900 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-800'} text-white px-4 py-2 font-mono text-sm focus:outline-none rounded-lg`}
                required
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs font-mono mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-white font-mono mb-2" htmlFor="role">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none appearance-none rounded-lg"
                required
              >
                <option value="">Select Role</option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
              </select>
            </div>

            {/* reCAPTCHA container */}
            <div className="flex justify-center">
              <div
                className="g-recaptcha"
                data-sitekey="6LfMi7gqAAAAAFdm_vwXrekR_9lj1tAf3ooP3j_F"
                data-callback="onRecaptchaSuccess"
                data-expired-callback="onRecaptchaExpired"
                data-theme="dark"
              ></div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-white text-black py-2 font-mono text-sm hover:bg-gray-100 transition-colors rounded-3xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!captchaVerified || !!errors.password || !!errors.confirmPassword}
              >
                Sign Up
              </button>

              {/*G-botton to be edited*/}
              <div className="flex justify-center my-4">
                <div id="g_id_signin" className="w-full"></div>
              </div>
            </div>

            <p className="text-gray-500 text-center font-mono text-sm">
              Already have an account?{' '}
              <Link to="/" className="text-blue-400 hover:text-blue-300">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;