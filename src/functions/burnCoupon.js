import React, { useState } from 'react';
import axios from 'axios';



export const burnCoupon = async (accessToken) => {
    try {
      // const accessToke = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJzM0BleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiY3VycmVudFRpbWUiOjE3MjQ4MTM2NDc1MjcsImlhdCI6MTcyNDgxMzY0NywiZXhwIjoxNzI0ODEzNjU3fQ.A-8mL5-Co80mIJXozgbyATgCEUEsZfIJHpbpk01o5TA"; // Replace with your actual access token
      // console.log(accessToken);

      console.log('refreshing token');
      console.log('accessToken is ', accessToken);
      // const response = await fetch('http://192.168.68.64:8082/auth/refresh', {
      //     method: 'GET',
      //     credentials: 'include', // Include cookies in the request
      //   })
    
    //   const response = await axios.post('http://localhost:8082/coupon/burnUserCouponCode', {}, { // Use Axios for the request
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${token}`,
    //     },
    //   });

        const couponToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb3Vwb25fY29kZSI6IkFCQzEyMyIsImVtYWlsIjoidXNlcnMzQGV4YW1wbGUuY29tIiwiY3VycmVudFRpbWUiOjE3MjcwODEzMjc2OTcsImlhdCI6MTcyNzA4MTMyNywiZXhwIjoxNzI3MDgzMTI3fQ.PtqyU3FtBVNo6uYjBHdVzjCOpKeI-Z0tvcR2qEMNn0w";
      const response = await axios.post('http://localhost:8082/coupon/burnUserCouponCode', {
        data: { 
          // ... your request data 
        },
        couponToken: couponToken // Sending the second token in the body
      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}` // First token in Authorization header
        }
      });
      // const response = await axios.get('https://dapp.bettermi.io/couponApi/auth/refresh',{
      //   testing:"123"
      // }, {
      //   withCredentials: true, // This sends cookies with the request
      // })
  
      console.log('Protected Data:', response.data);
    } catch (error) {
      console.error('Error accessing protected route:', error.response?.data || error.message);
    }
  }