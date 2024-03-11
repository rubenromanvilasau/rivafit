import Image from "next/image";
import Feature from "../components/Feature";

export default function Home() {
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
          className="opacity-50"
        />
        <h1 className="text-4xl uppercase text-white font-bold absolute top-8 left-1/2 md:w-fit md:top-32 md:left-4 md:translate-x-0 w-full -translate-x-1/2 text-center">Vive una experiencia de <span className="text-5xl underline underline-offset-4 text-purple-600">CALIDAD</span></h1>
        
        <div className="flex gap-4 absolute bottom-16 left-12">
          <Feature
            imagePath="/images/girl-trainer.jpg"
            title="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed odio sequi ip"
          />

          <Feature
            imagePath="/images/man-trainer.jpg"
            title="Lorem ipsum dolor sit amet."
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed odio sequi ip"
          />

          <Feature
            imagePath="/images/girl-trainer.jpg"
            title="Lorem, ipsum dolor"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sed odio sequi ipsam, sapiente tempora?"
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
          className="opacity-50"
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
          className="opacity-50"
        />
        <span className="text-white text-2xl font-bold uppercase absolute left-32 top-1/2 translate-y-1/2">Lorem ipsum dolor sit amet.</span>
      </section>
    </main>
  );
}
