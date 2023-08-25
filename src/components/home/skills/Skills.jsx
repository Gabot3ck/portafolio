import { WrapperSection } from "../../../ui";
import { TitleOfSection } from "../../TitleOfSection";
import { ContainerOfSkillsBoxes } from "./ContainerOfSkillsBoxes";


export const Skills = () => {

  return (
    <WrapperSection >
      <section
        className=" mx-auto -mt-40 py-14 w-[88%] h-auto rounded-[12px]
        flex flex-col items-center bg-light-500
        text-dark-400 shadow-lg"
      >
        <TitleOfSection title='Mi caja de herramientas' />

        <ContainerOfSkillsBoxes />
      </section>
    </WrapperSection>
  )
}
