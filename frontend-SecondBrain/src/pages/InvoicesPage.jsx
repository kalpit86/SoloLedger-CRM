import React from 'react'
import Sidebar from '../components/SideBar'

const InvoicesPage = () => {
  return (
    <div className='flex'>
    <Sidebar active="invoices"></Sidebar>
    <div>this is InvoicesPage</div>
    </div>
  )
}

export default InvoicesPage
