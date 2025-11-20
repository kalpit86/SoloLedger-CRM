import React from 'react'
import useUserStore from '../store/useUserStore';
import SideBar from '../components/SideBar';

const DashboardPage = () => {
  const user = useUserStore((state) => state.user)
  return (
    <div className='bg-amber-500'>
    <SideBar></SideBar>
    </div>
  )
}

export default DashboardPage
