import avatar from '../../assets/mf-avatar.svg'

export const Header = () => {
  return (
    <header
      className="w-full min-h-screen pt-14 
      flex  flex-col justify-end items-center gap-7
      bg-light-500"
    >
      <h1 className="text-6xl font-bold" >{ `< Desarrollador Web />` }</h1>
      <h2 className="text-xl">Diseño y desarrollo soluciones web innovadoras que conecten objetivos</h2>
      <img className='my-7' src={ avatar } alt="Imagen de avatar Gabriel Castillo Desarrollador Web" />
    </header>
  )
}
