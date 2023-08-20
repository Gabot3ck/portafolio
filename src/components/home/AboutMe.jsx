import { WrapperSection } from "../../ui";


export const AboutMe = () => {


  return (
    <WrapperSection
      background='bg-primary-500'
    >
      <section
      className="mt-40 w-1/2 flex flex-col items-center text-light-500 gap-5"
    >
      <h3 className="text-center text-4xl font-bold leading-tight" >Hola, soy Gabriel Castillo</h3>
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
