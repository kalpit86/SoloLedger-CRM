import { useState } from 'react'
import NavElement from './NavElement.jsx';
import GlassCard from './GlassCard.jsx';
import {HomeIcon, ArrowRightIcon, DocumentTextIcon,Cog6ToothIcon,BriefcaseIcon} from "@heroicons/react/24/outline"
import {UserGroupIcon} from "@heroicons/react/24/solid"


const SideBar2 = () => {

 const [isOpen,setIsOpen] = useState(false);

 let width = isOpen ? 'sm:w-40' : 'sm:w-16'
  return (
  <GlassCard width={`${width}`} height="h-full" animation="transition-all ease-in-out duration-400">
    <NavElement isOpen={isOpen} name="SoloLedger">
      <HomeIcon className="size-8 text-slate-300"/>
    </NavElement>

    <nav className='flex-4 
    flex-col 
    items-center 
    justify-evenly
    mt-8
    p-2.5
    max-w-xs
    '>
    {/* Dashboard Icon Tab */}
    <NavElement isOpen={isOpen} name="Dashboard">
      <HomeIcon className="size-6 text-slate-300"/>
    </NavElement>


    {/* Invoices Icon Tab */}
    <NavElement isOpen={isOpen} name="Invoices">
      <DocumentTextIcon className="size-6 text-slate-300"/>
    </NavElement>

    {/* Clients Icon Tab */}
    <NavElement isOpen={isOpen} name="Clients">
      <UserGroupIcon className="size-6 text-slate-300" />
    </NavElement>

    {/* Settings Icon Tab */}
    <NavElement name="Settings" isOpen={isOpen}>
      <Cog6ToothIcon className="size-6 text-slate-300" />
    </NavElement>
      

    {/* Projects Icon Tab */}
    <NavElement name="Projects"isOpen={isOpen}>
        <BriefcaseIcon className="size-6 text-slate-300"/>
    </NavElement>
  </nav>

  <button 
      onClick={()=> setIsOpen(!isOpen)} className={` 
      bg-white/10 
      border-white/40 border-1 
      cursor-pointer 
      text-slate-300
      backdrop-blur-2xl 
      shadow-xl 
      p-2 
      rounded-full 
      transition-all
      ease-in-out
      duration-400
      ${
        isOpen ? "px-12 translate":"w-fit"
      }
      `}
      >
      <ArrowRightIcon className={`text-slate-300 size-6 transition-transform
      duration-450 ease-in-out ${isOpen ? "-rotate-180" : "rotate-0"}`}/>
  </button>
</GlassCard>
  )
}

export default SideBar2
