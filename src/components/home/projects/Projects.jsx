import { WrapperSection } from "../../../ui"
import { TitleOfSection } from "../../TitleOfSection"


export const Projects = () => {



  return (
    <WrapperSection>
      <section
        className="mx-auto min-h-full w-[88%]  rounded-[12px]
        flex flex-col items-center bg-red-400
        text-dark-400"
      >
        <TitleOfSection title='Portafolio' />

        <h4 className="text-xl mb-5" >Estos son algunos proyectos en los que he trabajado</h4>

        <main
          className="w-full min-h-full flex flex-nowrap justify-between items-center
          bg-green-400"
        >

          <div
            className="w-1/3 bg-amber-400 h-64 "
          >
            <figure
              className="rounded-xl relative h-64 overflow-hidden"
            >
              <img
                className="absolute top-0 left-0 right-0 bottom-0 z-40 
                w-full h-64 rounded-xl hover:scale-110 hover:opacity-0
                duration-[350ms] ease-in-out overflow-clip"
                src="https://mattfarley.ca/img/projects/chronicled.png" 
                alt="Imagen de un gato" 
              />
              <figcaption
                className="absolute top-0 left-0 z-20 p-5 w-full h-full 
                flex flex-col justify-center items-center gap-6
                text-light-500"
              >
                <p className="text-center w-11/12 font-medium text-xl" >
                  Esta es una imagen de un gato
                </p>
                <a
                  className="w-1/2 border-2 border-primary-500 p-2
                  text-center text-lg font-medium rounded-full
                  hover:bg-primary-500 z-50"
                  href=""
                >
                  Visitar Web
                </a>
              </figcaption>

              <div
                className=" absolute top-0 left-0 z-10 w-full h-64 rounded-xl bg-primary-700"
              />
            </figure>
          </div>

        </main>
      </section>
    </WrapperSection>
  )
}
