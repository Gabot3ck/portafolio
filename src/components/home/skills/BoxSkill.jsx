

export const BoxSkill = ( { icon, title } ) => {


  return (
    <div className="w-[140px] my-1 h-[60px] flex justify-center gap-2 items-center bg-red-500 rounded" >
      <span>
        { icon }
      </span>
      <p className="m-0 text-lg font-bold" >
        { title }
      </p>
    </div>
  )
}
