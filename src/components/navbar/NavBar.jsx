import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter, FaTiktok } from "react-icons/fa";
import { LinkRRSS, HamburguerMenu } from "../buttons";
import { LinkNav } from "./LinkNav";


export const NavBar = () => {


  return (
    <nav className="fixed z-40 w-full h-14 bg-light-500 border-b ">
      <main className="mx-auto px-4 md:px-2 xl:px-4 h-full  max-w-[1400px] flex justify-between items-center ">
        <Link className="" to='/'>Gaboteck</Link>
        <ul className="w-2/3 hidden md:flex justify-around xl:justify-evenly">
          
          <li>
            <LinkNav 
              link='/'
              title='Inicio'
            />
          </li>
          
          <li className="">
            <LinkNav 
              link='/servicios'
              title='Servicios'
            />
          </li>
          <li className="">
            <LinkNav 
              link='/proyectos'
              title='Proyectos'
            />
          </li>
          <li className="">
            <LinkNav 
              link='/habilidades'
              title='Habilidades'
            />
          </li>
          <li className="">
            <LinkNav 
              link='/sobre-mi'
              title='Un poco sobre mi'
            />
          </li>
        </ul>

        <section className="w-44 hidden md:flex justify-between items-center px-2 xl:p-0 " >
          <LinkRRSS 
            icon={ <FaLinkedinIn /> }
            link='https://www.linkedin.com/in/gabriel-castillo-frontend/' 
          />
          
          <LinkRRSS 
            icon={ <FaGithub /> }
            link='https://github.com/Gabot3ck' 
          />

          <LinkRRSS 
            icon={ <FaInstagram /> }
            link='https://www.instagram.com/gabot3ck' 
          />

          <LinkRRSS 
            icon={ <FaTwitter /> }
            link='https://twitter.com/Gabot3ck' 
          />

          <LinkRRSS 
            icon={ <FaTiktok /> }
            link='https://www.tiktok.com/@gaboteck' 
          />
        </section>

        <button 
          className="w-28 h-10 rounded-lg
          hidden md:block
          bg-primary-500 text-white
          hover:bg-primary-400
          transition-colors duration-300 ease-out" 
          type="submit"
        >
        Contáctame
        </button>

        <HamburguerMenu />

      </main>
    </nav>
  )
}
