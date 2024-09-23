import React, { useState } from 'react';
import axios from 'axios';



export const refreshCoupon = async (accessToken) => {
    try {
      // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJzM0BleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiY3VycmVudFRpbWUiOjE3MjQ4MTM2NDc1MjcsImlhdCI6MTcyNDgxMzY0NywiZXhwIjoxNzI0ODEzNjU3fQ.A-8mL5-Co80mIJXozgbyATgCEUEsZfIJHpbpk01o5TA"; // Replace with your actual access token
      // console.log(accessToken);
    //   const response = await axios.post('http://localhost:8082/auth/merchantLogin', {
        const response = await axios.post('http://localhost:8082/coupon/refreshCouponCode', {

              email:"cychiuak@connect.hku.hk",
              coupon_id:"1"

          }, {
            headers: {
              'Authorization': `Bearer ${accessToken}` // First token in Authorization header
            }
          });
  
      console.log('Protected Data:', response.data);
    } catch (error) {
      console.error('Error accessing protected route:', error.response?.data || error.message);
    }
  }