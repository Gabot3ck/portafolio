import { Link } from "react-router-dom";



export const LinkNav = ( { link, title, icon } ) => {


  return (
    <Link
      className=" hover:text-primary-400 
      flex items-center gap-2 text-sm md:text-base font-normal md:font-medium
      transition-colors duration-300 ease-out"
      to={ link }
    >
      <span className="md:hidden">
        { icon }
      </span>
      { title }
    </Link>
  )
}
