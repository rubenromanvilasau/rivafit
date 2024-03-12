import VideoPost from "../../components/VideoPost";

const BlogPage = () => {
    return (
      <div className="container mx-auto p-4 md:p-0">
        <h1 className="text-4xl font-bold uppercase mt-4">Últimos videos</h1>

        <VideoPost
          title={'Title of video'}
          description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa eius explicabo nesciunt dicta perferendis maxime repellat minima pariatur doloribus perspiciatis unde delectus deleniti ipsam earum quasi fugiat, at omnis. Recusandae, voluptatibus expedita vero delectus fuga minus tempora, quasi at, adipisci dolorum praesentium quos obcaecati. Iusto quasi cum sapiente cumque.'}
          day={23}
          month='Jun'
          imagePath="/images/gym1.jpg"
          videoUrl="https://www.tiktok.com"
        />
        <VideoPost
          title={'Title of video'}
          description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa eius explicabo nesciunt dicta perferendis maxime repellat minima pariatur doloribus perspiciatis unde delectus deleniti ipsam earum quasi fugiat, at omnis. Recusandae, voluptatibus expedita vero delectus fuga minus tempora, quasi at, adipisci dolorum praesentium quos obcaecati. Iusto quasi cum sapiente cumque.'}
          day={8}
          month='Ago'
          imagePath="/images/gym1.jpg"
          videoUrl="https://www.tiktok.com"
        />

      </div>
    )
}

export default BlogPage;