import axios from 'axios';

export const login = async (setToken) => {
    try {

      const response = await axios.post('http://localhost:8082/auth/', {
        "email" : "users3@example.com",
        "coupon_id":"3"
   } , {
    withCredentials: true // Ensures cookies are sent
  }
      ).catch((error) => {
        console.error('Error accessing protected route:', error.response?.data || error.message);
      });
  
      console.log('response is ', response);
      setToken(response.data.accessToken);
    } catch (error) {
        console.log("error is ", error)
    }
  };