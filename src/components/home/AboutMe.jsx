import { WrapperSection } from "../../ui";
import { TitleOfSection } from "../TitleOfSection";


export const AboutMe = () => {


  return (
    <WrapperSection
      background='bg-primary-500'
    >
      <section
      className="mt-32 w-1/2 flex flex-col items-center text-light-500 gap-5"
    >
      <TitleOfSection 
        title='Hola, soy Gabriel Castillo'
      />

      <p className="text-center text-xl font-medium">   
        Forjé mi camino desde la Ingeniería Industrial hacia el mundo de la programación, desarrollando la habilidad 
        de analizar problemas complejos desde diversas perspectivas y traducirlos en código funcional consiguiendo soluciones 
        eficientes y efectivas. Te puedo ayudar a innovar  y transformar tus desafíos en 
        oportunidades. 
      </p>
      
    </section>
    </WrapperSection>
    
  )
}
