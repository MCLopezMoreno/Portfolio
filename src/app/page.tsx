import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="flex justify-center items-center m-3 w-4/5 h-[600px]">
        <div className="flex justify-center m-auto w-fit">
          <div className="m-auto w-[420px] h-[420px] rounded-full overflow-hidden">
            <Image 
              src={'https://ik.imagekit.io/meryanne/Yo2.jpg?updatedAt=1754708827477'}
              width={420}
              height={420}
              alt="Mariana Lopez"
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <div className="m-auto w-2/3">
          <h1 className="ml-12 text-[var(--primary)] text-6xl">Mariana Lopez</h1>
          <h3 className="ml-12 text-[var(--secondary)] text-4xl">Desarrolladora Frontend</h3>
          <p 
            className="m-3 ml-12 mr-12 text-[var(--paragraph)]"
          >
            {`🍥🎨Soy programadora con alma de exploradora digital. Mi código se nutre de las narrativas épicas del anime, la lógica de los videojuegos y la emoción de los soundtracks. Mi mente siempre está en modo debug, preguntándose '¿cómo puedo hacer que esto funcione?'. Para mí, el desarrollo web es el campo de batalla perfecto: cada línea de código es un paso para crear algo genial, y aunque a veces console.log("Send Help?") sea mi mejor amigo, la satisfacción de resolver problemas no tiene precio. En resumen: soy lógica, píxeles y bucles infinitos de 'solo un commit más'.💻✨`}
          </p>
          <div className="ml-12 flex flex-wrap mt-1" >
            <a href="https://skillicons.dev">
              <img src="https://skillicons.dev/icons?i=css,discord,postgres,figma,github,html,js,materialui,nextjs,nodejs,react,tailwind,ts&vscode=14" />
            </a>
          </div>
        </div>
      </section>
      <section className=" flex flex-col justify-center items-center m-12 w-4/5">
        <h2 className="m-6 text-[var(--secondary)] text-4xl text-center">Mis proyectos</h2>
        <div className="flex mt-5 p-6 w-2/3 bg-[var(--primary)] rounded-lg relative">
          <div className="w-3/5 relative">
            <span className="absolute flex justify-center items-center -top-12 -left-1 p-1 pl-3 pr-3 bg-[var(--secondary)] rounded-full text-[var(--background)] text-3xl">Solvex Company</span>
            <p className="mt-2">
              Colaboré en la creación de una SPA intuitiva y moderna que tenía como objetivo principal optimizar y centralizar la gestión de incidencias 
              internas en una empresa. Permite registrarse e iniciar sesion, reportar, asignar, priorizar y hacer seguimiento de tickets de 
              manera eficiente, mejorando la comunicación entre departamentos y reduciendo significativamente 
              los tiempos de resolución.
            </p>
            <div>
              <span>Tecnologias:</span>
              <div className="flex flex-wrap mt-1" >
                <div className="m-1 pl-2 pr-2 bg-blue-300 w-fit rounded-full">React.js</div>
                <div className="m-1 pl-2 pr-2 bg-blue-500 w-fit rounded-full">TypeScript</div>
                <div className="m-1 pl-2 pr-2 bg-gray-600 w-fit rounded-full">Next.js</div>
                <div className="m-1 pl-2 pr-2 bg-blue-500 w-fit rounded-full">Formik y YUP</div>
                <div className="m-1 pl-2 pr-2 bg-green-500 w-fit rounded-full">Figma</div>
                <div className="m-1 pl-2 pr-2 bg-blue-400 w-fit rounded-full">Axios</div>
                <div className="m-1 pl-2 pr-2 bg-blue-400 w-fit rounded-full">Tailwind CSS</div>
              </div>
            </div>
          </div>
          <div className="m-2 absolute flex justify-center items-center top-3 -right-12 rounded-md overflow-hidden">
            <Image 
              src={'https://ik.imagekit.io/meryanne/SolvexHome.png?updatedAt=1755897893593'}
              width={420}
              height={70}
              alt="Inicio Solvex Company"
              className="object-cover"/>
          </div>
        </div>
      </section>
      <section className="m-12 w-4/5">
        <h2 className="m-2 text-[var(--secondary)] text-4xl text-center">Puedes contactarme por</h2>
        <div className="flex mb-6">
          <div className="w-1/2 flex justify-end">
            <Link 
              href={'https://www.linkedin.com/in/meryanne98/'}
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 w-[50px] hover:w-[140px] h-[50px] transition-all duration-700 bg-[var(--linkedin)] text-white flex items-center justify-center rounded-full group overflow-hidden"
            >
              <span className="text-white font-medium w-0 group-hover:w-[90px] group-hover:pl-4 group-hover:pr-2 scale-x-0 group-hover:scale-x-100 transition-all duration-700 origin-left">LinkedIn</span>
              <Image 
                src={'https://ik.imagekit.io/meryanne/linkedin.png?updatedAt=1755879223771'}
                width={50}
                height={50}
                alt="LinkedIn Mariana Lopez"
                className="object-contain"/>
            </Link>
          </div>
          <div className="w-1/2 flex justify-start">
            <Link
              href={'https://github.com/MCLopezMoreno'}
              target="_blank"
              rel="noopener noreferrer"
              className="m-1 w-[50px] hover:w-[140px] h-[50px] transition-all duration-700 bg-[var(--github)] text-white flex items-center justify-center rounded-full group overflow-hidden"
            >
              <Image 
                src={'https://ik.imagekit.io/meryanne/github.png?updatedAt=1755879223771'}
                width={50}
                height={50}
                alt="Github Mariana Lopez"
                className="object-contain"/>
              <span className="text-white font-medium w-0 group-hover:w-[90px] group-hover:pl-4 group-hover:pr-2 scale-x-0 group-hover:scale-x-100 transition-all duration-700 origin-right">GitHub</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
