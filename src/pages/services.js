import Layout from "../components/layout";
import Content from "../components/content";

function Services({photos}) { 
    return (
    <Layout page="Services">
        <Content>
            <h1 className="font-title text-2xl my-2">Services</h1>
            <p className="leading-relaxed my-1">Dignissimos officia et enim impedit quia. Aliquid quia aut dolorem. Aperiam dicta libero fugiat minus qui impedit minima optio. Non cumque temporibus error molestiae et et. Vel at magnam et perferendis asperiores.</p>
            <div className="grid grid-cols-5 gap-2">
            { photos && photos.map(photo => {
                return (
                    <img key={photo.id} src={photo.thumbnailUrl} width={150} height={150} alt={photo.title} title={photo.title}/>
                )
            })}
            </div>
        </Content>
    </Layout>
    )
}

export default Services

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  const photos = data.filter(photo => photo.id < 11) || []

  return {
    props: {photos},
    revalidate: 60
  }
}