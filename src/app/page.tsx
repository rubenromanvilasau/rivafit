import Image from "next/image";
import Feature from "../components/Feature";

export default async function Home() {

  return (
    <main>
      <section className="w-full relative">
        <Image
          src={'/images/gym.avif'}
          alt="Gym"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '86vh'}} // optional
          className="opacity-90"
        />
        <h1 className="text-4xl uppercase text-white font-bold absolute top-8 left-1/2 md:w-fit md:top-32 md:left-4 md:translate-x-0 w-full -translate-x-1/2 text-center">Vive una experiencia de <span className="text-5xl underline underline-offset-4 text-purple-600">CALIDAD</span></h1>
        
        <div className="flex gap-4 absolute bottom-16 left-12">
          <Feature
            imagePath="/images/girl-trainer.jpg"
            title="Máquinas de alta calidad"
            description="Nuestras máquinas son de alta calidad, con marcas como ILUS y GymLeco"
          />

          <Feature
            imagePath="/images/man-trainer.jpg"
            title="Acoso CERO"
            description="Nos preocupamos de que esté estrictamente prohibido el acoso en nuestras instalaciones"
          />

          <Feature
            imagePath="/images/girl-trainer.jpg"
            title="Asistencia en entrenamientos"
            description="Nuestros profesores en sala te ayudarán a mejorar tu técnica y a alcanzar tus objetivos sin coste adicional"
          />

        </div>

      </section>
      <section className="relative">
        <Image
          src={'/images/gym1.jpg'}
          alt="Gym"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '86vh' }} // optional
          className="opacity-90"
        />
        <span className="text-white text-2xl font-bold uppercase absolute right-32 top-1/2 translate-y-1/2">Lorem ipsum dolor sit amet.</span>

      </section>
      <section className="relative">
        <Image
          src={'/images/gym2.jpg'}
          alt="Gym"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '86vh'}} // optional
          className="opacity-90"
        />
        <span className="text-white text-2xl font-bold uppercase absolute left-32 top-1/2 translate-y-1/2">Lorem ipsum dolor sit amet.</span>
      </section>
    </main>
  );
}
