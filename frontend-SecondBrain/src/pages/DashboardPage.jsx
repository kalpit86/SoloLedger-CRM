import React from 'react'
import useUserStore from '../store/useUserStore';
import SideBar from '../components/SideBar';

const DashboardPage = () => {
  const user = useUserStore((state) => state.user)
  return (
    <SideBar></SideBar>
  )
}

export default DashboardPage
