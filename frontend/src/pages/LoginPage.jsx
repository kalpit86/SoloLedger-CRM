import AuthComponent from '../components/AuthComponent'
import AuthRedirect from '../components/AuthRedirect'

const LoginPage = () => {

  return (
    <>
    <AuthRedirect/>
    <AuthComponent authType={"Login"}></AuthComponent>
    </>
  )
}

export default LoginPage
