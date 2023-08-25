

export const LinkForWebsite = ( { img, alt, text, link } ) => {


  return (
    <div
      className="w-1/3 bg-amber-400 h-64 "
    >
      <figure
        className="rounded-xl relative h-64 overflow-hidden group"
      >
        <img
          className="absolute top-0 left-0 right-0 bottom-0 z-40 
          w-full h-64 rounded-xl group-hover:scale-125 group-hover:opacity-0 group-hover:z-10
          duration-[350ms] ease-in-out overflow-clip delay-75"
          src={ img } 
          alt={ alt } 
        />
        <figcaption
          className="absolute top-0 left-0 z-20 p-5 w-full h-full 
          flex flex-col justify-center items-center gap-6
          text-light-500  bg-primary-700 "
        >
          <p className="text-center w-11/12 font-medium text-xl" >
            { text }
          </p>
          <a
            className="w-1/2 border-2 border-primary-500 p-2
            text-center text-lg font-medium rounded-full
            hover:bg-primary-500 z-50 relative duration-[350ms] ease-in-out"
            href={ link }
            target="_blank"
            rel="noreferrer"
          >
            Visitar Web
          </a>
        </figcaption>
      </figure>
    </div>
  )
}
