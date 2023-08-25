

export const WrapperSection = ( { children, background='bg-light-500' } ) => {
  return (
    <div
      className={ `w-full min-h-screen ${ background } 
      flex justify-center items-start`}
    >
      { children }
    </div>
  )
}
