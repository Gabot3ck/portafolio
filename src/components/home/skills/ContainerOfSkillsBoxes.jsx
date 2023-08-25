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
import { SkillsBox } from "./SkillsBox";



export const ContainerOfSkillsBoxes = () => {


  return (

    <main 
      className="mx-auto my-10 p-2 w-[75%] h-auto flex gap-3 flex-wrap justify-around"
    >

      <SkillsBox 
        icon={ <SiJavascript size={ 30 }/> }
        title='Javascript'
      />

      <SkillsBox 
        icon={ <FaReact size={ 30 }/> }
        title='React'
      />

      <SkillsBox 
        icon={ <SiRedux size={ 30 }/> }
        title='Redux'
      />

      <SkillsBox 
        icon={ <FaNodeJs size={ 30 }/> }
        title='Node'
      />

      <SkillsBox 
        icon={ <FaSass size={ 30 }/> }
        title='Sass'
      />

      <SkillsBox 
        icon={ <SiTailwindcss size={ 30 }/> }
        title='Tailwind'
      /> 

      <SkillsBox 
        icon={ <SiBootstrap size={ 30 }/> }
        title='Bootstrap'
      />

      <SkillsBox 
        icon={ <SiFirebase size={ 30 }/> }
        title='Firebase'
      />

      <SkillsBox 
        icon={ <SiMysql size={ 30 }/> }
        title='Mysql'
      />

      <SkillsBox 
        icon={ <SiPhp size={ 30 }/> }
        title='PHP'
      />

      <SkillsBox 
        icon={ <SiGithub size={ 30 }/> }
        title='GitHub'
      />

      <SkillsBox 
        icon={ <SiFigma size={ 30 }/> }
        title='Figma'
      />

      <SkillsBox 
        icon={ <SiCanva size={ 30 }/> }
        title='Canva'
      />
      
      <SkillsBox 
        icon={ <SiAdobeillustrator size={ 30 }/> }
        title='Ilustrator'
      />

      <SkillsBox 
        icon={ <SiNotion size={ 30 }/> }
        title='Notion'
      />
    </main>
  )
}