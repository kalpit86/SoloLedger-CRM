import { Navigate,Outlet } from 'react-router-dom';
import useUserStore from '../store/useUserStore';

const ProtectedRoute = ({children}) => {

  const user = useUserStore((state) => state.user);

  const token = localStorage.getItem("Auth-Token");

  if(!token || !user){
    return(
      <Navigate to={"/login"} replace/>
    )
  }

  return (children ? children : <Outlet/>)
}

export default ProtectedRoute
