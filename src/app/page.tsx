import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <Image 
          src={'https://ik.imagekit.io/meryanne/Yo2.jpg?updatedAt=1754708827477'}
          width={500}
          height={500}
          alt="Mariana Lopez"
        />
        <h1>Mariana Cristina</h1>
        <h2>Lopez Moreno</h2>
        <p>Desarrolladora Frontend ... </p>
      </section>
      <section>
        <h2>Mis proyectos</h2>
      </section>
      <section>
        <h2>Puedes contactarme por</h2>
      </section>
    </>
  );
}
