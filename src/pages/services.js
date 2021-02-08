import Layout from "../components/layout";
import Content from "../components/content";
import Image from "../components/image";
import { Trail } from 'react-spring/renderprops.cjs'

function Services({photos}) {

    const animation = {
        from: {opacity: 0, transform: 'translate3d(-10px,0,0)'},
        to: {opacity: 1, transform: 'translate3d(0px,0,0)'},
        config: { mass: 1, tension: 190, friction: 30 }
    }
    return (
    <Layout page="Services">
        <Content>
            <h1 className="font-title text-2xl my-2">Services</h1>
            <p className="leading-relaxed my-1">Dignissimos officia et enim impedit quia. Aliquid quia aut dolorem. Aperiam dicta libero fugiat minus qui impedit minima optio. Non cumque temporibus error molestiae et et. Vel at magnam et perferendis asperiores.</p>
            <div className="grid grid-cols-5 gap-2">
                <Trail items={photos} keys={photo => photo.id} {...animation}>
                    {photo => props => 
                        <div key={photo.id} style={props} className="bg-gray-600 relative flex-grow overflow-hidden rounded shadow-md h-32">
                            <Image src={photo.download_url} layout="fill" className="object-cover object-center" alt={photo.title} title={`Photo by ${photo.author}`}/>
                        </div>
                        }
                </Trail>
                {/* { photos && photos.map(photo => {
                    return (
                        <Image key={photo.id} src={photo.download_url} width={195} height={135} alt={photo.title} title={`Photo by ${photo.author}`}/>
                    )
                })} */}
            </div>
        </Content>
    </Layout>
    )
}

export default Services

export async function getStaticProps() {
  const res = await fetch(`https://picsum.photos/v2/list?limit=10`)
  const photos = await res.json()

  if (!photos) return { notFound: true,}

  return {
    props: {photos},
    revalidate: 60
  }
}