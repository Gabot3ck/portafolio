

export const WrapperSection = ( { children, background } ) => {
  return (
    <div
      className={ `w-full min-h-screen ${ background }
      flex justify-center items-start`}
    >
      { children }
    </div>
  )
}
