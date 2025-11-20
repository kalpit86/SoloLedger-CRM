import {HomeIcon, ArrowRightIcon, DocumentTextIcon} from "@heroicons/react/24/outline"

const NavElement = ({isOpen,children,name}) => {
  return (
    <div className='flex items-center mt-4 cursor-pointer'>
        {children}
        <div className={`${isOpen ? 'max-w-xs p-2' : 'max-w-0 p-0'}  
        cursor-pointer
        overflow-hidden
        whitespace-nowrap
        transition-all 
        duration-400 
        ease-in-out
        `}
        >
        {name}
        </div>
    </div>
  )
}

export default NavElement