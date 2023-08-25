

export const SkillsBox = ( { icon, title } ) => {


  return (
    <div className="w-[140px] mb-5 h-[60px] flex justify-center gap-2 items-center bg-primary-700 text-primary-300 rounded-md " >
      <span>
        { icon }
      </span>
      <p className="m-0 text-lg font-bold text-light-500" >
        { title }
      </p>
    </div>
  )
}
