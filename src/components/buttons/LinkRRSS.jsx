
export const LinkRRSS = ( { link, icon } ) => {


  return (
    <a 
      href={ link } 
      className="rounded-full h-6 w-6 border border-gray-300 
      flex justify-center items-center text-xs
      hover:bg-primary-500 hover:text-light-500
      transition-colors duration-300 ease-out"
      target="_blank"
      rel="noreferrer"
    >
      { icon }
    </a>
  )
}
