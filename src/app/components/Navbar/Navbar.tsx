import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center bg-[var(--primary)]'>
      <div className='flex items-center'>
        <Image 
          src={'https://ik.imagekit.io/meryanne/LogoML.png?updatedAt=1756085257741'}
          width={75}
          height={75}
          alt='Logo ML'
          className='p-1'
        />
        <span className='text-black text-3xl'>Mariana Lopez</span>
      </div>
      <nav >
        <ul className='flex'>
          <li>
            <Link href={''} className='m-1 p-2 rounded-xl hover:bg-[var(--background)]'>Sobre mi</Link>
          </li>
          <li>
            <Link href={''} className='m-1 p-2 rounded-xl hover:bg-[var(--background)]'>Proyectos</Link>
          </li>
          <li>
            <Link href={''} className='m-1 p-2 rounded-xl hover:bg-[var(--background)]'>Contacto</Link>
          </li>
          <li>
            <Link href={''} className='m-1 pl-6 pr-6 bg-blue-900 rounded-full'></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar