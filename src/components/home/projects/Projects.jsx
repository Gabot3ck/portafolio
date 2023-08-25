import { WrapperSection } from "../../../ui"
import { TitleOfSection } from "../../TitleOfSection"
import { LinkForWebsite } from "./LinkForWebsite"


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

          <LinkForWebsite 
            img='https://mattfarley.ca/img/projects/chronicled.png'
            alt='Prueba de imagen'
            text='Prueba de imagen'
            link='https//:www.ebgchile.cl'
          />

        </main>
      </section>
    </WrapperSection>
  )
}
