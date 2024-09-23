import React, { useState } from 'react';
import axios from 'axios';



export const UserRefresh = async (setToken) => {
    try {
      // const accessToke = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJzM0BleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiY3VycmVudFRpbWUiOjE3MjQ4MTM2NDc1MjcsImlhdCI6MTcyNDgxMzY0NywiZXhwIjoxNzI0ODEzNjU3fQ.A-8mL5-Co80mIJXozgbyATgCEUEsZfIJHpbpk01o5TA"; // Replace with your actual access token
      // console.log(accessToken);

      console.log('refreshing token');
      // const response = await fetch('http://192.168.68.64:8082/auth/refresh', {
      //     method: 'GET',
      //     credentials: 'include', // Include cookies in the request
      //   })


      const response = await axios.get('http://localhost:8082/auth/refresh', {
        withCredentials: true, // This sends cookies with the request
      })
      // const response = await axios.get('https://dapp.bettermi.io/couponApi/auth/refresh',{
      //   testing:"123"
      // }, {
      //   withCredentials: true, // This sends cookies with the request
      // })
  
      console.log('Protected Data:', response.data);
      console.log('Protected Data:', response.data.accessToken);
      setToken(response.data.accessToken);
    } catch (error) {
      console.error('Error accessing protected route:', error.response?.data || error.message);
    }
  }