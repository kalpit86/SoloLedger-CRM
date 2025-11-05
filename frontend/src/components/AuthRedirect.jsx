// components/AuthRedirect.jsx
import { Navigate } from 'react-router-dom';

const AuthRedirect = () => {
  // Check localStorage directly
  const token = localStorage.getItem('Auth-Token');
  const storedData = localStorage.getItem('user-data-storage');
  
  if (token && storedData) {
    try {
      const userData = JSON.parse(storedData);
      // Check if user data exists in the stored state
      if (userData.state?.user) {
        console.log('User authenticated, redirecting to dashboard');
        return <Navigate to="/dashboard" replace/>;
      }
    } catch (e) {
      console.error('Error parsing stored data:', e);
    }
  }
  
  // Return null if not authenticated (don't redirect)
  return null;
};

export default AuthRedirect;