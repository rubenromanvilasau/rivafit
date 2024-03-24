import VideoPost from "../../components/VideoPost";

const BlogPage = () => {
    return (
      <div className="container mx-auto p-4 md:pb-32">
        <h1 className="text-4xl font-bold uppercase mt-4 text-white">Últimos videos</h1>

        <VideoPost
          title={'No creas en los "Pierde grasa y gana músculo"'}
          description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa eius explicabo nesciunt dicta perferendis maxime repellat minima pariatur doloribus perspiciatis unde delectus deleniti ipsam earum quasi fugiat, at omnis. Recusandae, voluptatibus expedita vero delectus fuga minus tempora, quasi at, adipisci dolorum praesentium quos obcaecati. Iusto quasi cum sapiente cumque.'}
          day={23}
          month='Jun'
          imagePath="/images/tiktok1.png"
          videoUrl="https://www.tiktok.com/@carlos_rivafit/video/7348557340276264198"
        />
        <VideoPost
          title={'Dietas cetogénicas'}
          description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa eius explicabo nesciunt dicta perferendis maxime repellat minima pariatur doloribus perspiciatis unde delectus deleniti ipsam earum quasi fugiat, at omnis. Recusandae, voluptatibus expedita vero delectus fuga minus tempora, quasi at, adipisci dolorum praesentium quos obcaecati. Iusto quasi cum sapiente cumque.'}
          day={8}
          month='Ago'
          imagePath="/images/tiktok2.png"
          videoUrl="https://www.tiktok.com/@carlos_rivafit/video/7340385100607098118"
        />

      </div>
    )
}

export default BlogPage;