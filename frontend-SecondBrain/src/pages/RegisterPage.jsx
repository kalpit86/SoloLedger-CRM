import React from 'react'
import AuthComponent from '../components/AuthComponent'
import useAuth from '../hooks/useAuth'
import AuthRedirect from '../components/AuthRedirect'

const RegisterPage = () => {
    const {isLoading,register} = useAuth()
  return (
    <>
    <AuthRedirect/>
    <AuthComponent authType={"Register"}></AuthComponent>
    </>
  )
}

export default RegisterPage
