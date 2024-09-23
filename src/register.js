import React, { useState } from 'react';
import axios from 'axios';
import { login } from './functions/login';
import { merchantLogin } from './functions/merchantLogin';
import { merchantRefresh } from './functions/merchantRefresh';
import { burnCoupon } from './functions/burnCoupon';
import { refreshCoupon } from './functions/refreshCouponId';
import { UserRefresh } from './functions/userRefresh';

function Register() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [qrcode,setQrcode] = useState('');
  const [token,setToken] = useState('');
   async function accessProtectedRoute() {
    try {
      const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJzM0BleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiY3VycmVudFRpbWUiOjE3MjQ4MTM2NDc1MjcsImlhdCI6MTcyNDgxMzY0NywiZXhwIjoxNzI0ODEzNjU3fQ.A-8mL5-Co80mIJXozgbyATgCEUEsZfIJHpbpk01o5TA"; // Replace with your actual access token
      console.log(accessToken);
      const response = await axios.get('http://localhost:8082/auth', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      console.log('Protected Data:', response.data);
    } catch (error) {
      console.error('Error accessing protected route:', error.response?.data || error.message);
    }
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await accessProtectedRoute();

      // const response = await fetch('http://localhost:8000/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email }),
      // });

      // if (response.ok) {
      //   const data = await response.text();
      //   setMessage(data);
      // } else {
      //   setMessage('Failed to send verification email.');
      // }

    } catch (error) {
      setMessage('An error occurred.');
    }
  };
  const requestTrial = async () => {
    try {
      const formData = {coupon_id: 1};
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJzM0BleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiY3VycmVudFRpbWUiOjE3MjQ4MTUxODg4NzUsImlhdCI6MTcyNDgxNTE4OCwiZXhwIjoxNzI0ODE1Nzg4fQ.5X7ZgSbyeqnKS6LPPq7IhBVY75H0kRDYTm1qYxeQ_uI"
      const response = await axios.post('http://localhost:8082/coupon/refreshCouponCode', formData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
      ).catch((error) => {
        console.error('Error accessing protected route:', error.response?.data || error.message);
      });
      console.log('response is ', response);
      console.log("response.data is ", response.data);
      // console.log('response.data is ', JSON.parse(response.data).data);
      setQrcode(response.data);
  
      console.log('response is ', response);
    } catch (error) {
      setMessage('An error occurred.');
    }
  };


  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <button onClick={ () => requestTrial()}>requestTrial</button>
      <button onClick={ async() => await login(setToken)}>login</button>
      <button onClick={ async() => await merchantLogin(setToken)}>merchantLogin</button>
      <button onClick={ async() => { await merchantRefresh(setToken);console.log("token is",token)}}>merchantRefresh</button>
      <button onClick={ () => burnCoupon(token)}>burnCoupon</button>
      <button onClick={ async() => {refreshCoupon(token)}}>refreshCoupon</button>
      <button onClick={ async() => {UserRefresh(setToken)}}>userRefresh</button>
      {/* <button onClick={ async() => { await merchantRefresh(setToken);console.log("token is",token)}}>merchantRefresh</button> */}
      {message && <p>{message}</p>}
      {qrcode && <img src={qrcode} alt="qrcode" />}
    </div>
  );
}

export default Register;