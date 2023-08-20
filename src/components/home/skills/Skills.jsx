import { FaReact, FaNodeJs, FaSass } from "react-icons/fa"; 
import { 
  SiJavascript, 
  SiRedux, 
  SiFirebase, 
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiGithub,
  SiFigma, 
  SiCanva,
  SiAdobeillustrator,
  SiNotion,
  SiPhp } from "react-icons/si";
import { WrapperSection } from "../../../ui";
import { BoxSkill } from "./";


export const Skills = () => {


  return (
    <WrapperSection 
      background='bg-light-500'
    >
      <section
        className=" mx-auto p-6 w-[88%] h-[220px] rounded-[12px]
        flex flex-col items-center 
        text-dark-400 shadow-lg"
      >
        <h3 className="text-center text-4xl font-bold " >Mi caja de herramientas</h3>

        <main 
          className="mx-auto w-[75%] h-auto flex gap-3 flex-wrap justify-around bg-green-500 py-3 px-2"
        >

          <BoxSkill 
            icon={ <SiJavascript size={ 30 }/> }
            title='Javascript'
          />

          <BoxSkill 
            icon={ <FaReact size={ 30 }/> }
            title='React'
          />

          <BoxSkill 
            icon={ <SiRedux size={ 30 }/> }
            title='Redux'
          />

          <BoxSkill 
            icon={ <FaNodeJs size={ 30 }/> }
            title='Node'
          />

          <BoxSkill 
            icon={ <FaSass size={ 30 }/> }
            title='Sass'
          />

          <BoxSkill 
            icon={ <SiTailwindcss size={ 30 }/> }
            title='Tailwind'
          /> 

          <BoxSkill 
            icon={ <SiBootstrap size={ 30 }/> }
            title='Bootstrap'
          />

          <BoxSkill 
            icon={ <SiFirebase size={ 30 }/> }
            title='Firebase'
          />

          <BoxSkill 
            icon={ <SiMysql size={ 30 }/> }
            title='Mysql'
          />

          <BoxSkill 
            icon={ <SiPhp size={ 30 }/> }
            title='PHP'
          />

          <BoxSkill 
            icon={ <SiGithub size={ 30 }/> }
            title='GitHub'
          />

          <BoxSkill 
            icon={ <SiFigma size={ 30 }/> }
            title='Figma'
          />

          <BoxSkill 
            icon={ <SiCanva size={ 30 }/> }
            title='Canva'
          />
          
          <BoxSkill 
            icon={ <SiAdobeillustrator size={ 30 }/> }
            title='Ilustrator'
          />

          <BoxSkill 
            icon={ <SiNotion size={ 30 }/> }
            title='Notion'
          />


          
        </main>
      </section>
    </WrapperSection>
  )
}
