import { useState } from "react";
import { FaBars } from "react-icons/fa"
import { MenuMobile } from "../navbar";


export const HamburguerMenu = () => {

  const [ showMenu, setShowMenu ] = useState(false);

  const handleClick = () => {
    setShowMenu( !showMenu );
  }


  return (<>
      <button 
        className="text-primary-500 md:hidden"
        onClick={ handleClick }
      >
        <FaBars size={ 30 } />
      </button>

      {
        showMenu && <MenuMobile />
      }
    </>
  )
}