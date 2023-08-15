import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { PiHandshakeThin } from "react-icons/pi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { BsPersonBoundingBox } from "react-icons/bs";
import { LinkNav } from "./LinkNav";


export const MenuMobile = () => {



  return (
    <section
      className="absolute left-0 top-0 py-3 ps-6 w-[80%] md:hidden h-full bg-gray-400"
    >
      <Link className="" to='/'>Gaboteck</Link>

      <ul className="mt-6 w-full flex flex-col justify-start gap-6">
        <li>
          <LinkNav 
            link='/'
            title='Inicio'
            icon={ <AiOutlineHome size={ 16 } /> }
          />
        </li>
        
        <li className="">
          <LinkNav 
            link='/servicios'
            title='Servicios'
            icon={ <PiHandshakeThin size={ 16 } /> }
          />
        </li>
        <li className="">
          <LinkNav 
            link='/proyectos'
            title='Proyectos'
            icon={ <LiaProjectDiagramSolid size={ 16 } /> }
          />
        </li>
        <li className="">
          <LinkNav 
            link='/habilidades'
            title='Habilidades'
            icon={ <TbDeviceDesktopStar size={ 16 } /> }
          />
        </li>
        <li className="">
          <LinkNav 
            link='/sobre-mi'
            title='Un poco sobre mi'
            icon={ <BsPersonBoundingBox size={ 16 } /> }
          />
        </li>
      </ul>
    </section>
  )
}
