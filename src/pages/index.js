import Layout from "../components/layout";
import Modal from '../components/modal'

function Index() { 
    return (
    <Layout>
        <h1 className="font-title text-2xl my-2">Dignissimos officia</h1>
        <p className="leading-relaxed my-1">Dignissimos officia et enim impedit quia. Aliquid quia aut dolorem. Aperiam dicta libero fugiat minus qui impedit minima optio. Non cumque temporibus error molestiae et et. Vel at magnam et perferendis asperiores.</p>
        <h2 className="font-title text-xl my-2">Maxime voluptas</h2>
        <p className="leading-relaxed my-1">Fuga est minus ipsam odio non. Totam vel suscipit maxime voluptas fugiat mollitia. Qui non dicta illum necessitatibus.</p>
        <h2 className="font-title text-xl my-2">Dolore</h2>
        <p className="leading-relaxed my-1">Dolore est nisi perferendis dolor. Dolore quia consectetur ab. Et dolore earum sit voluptatem molestias deserunt ea.</p>
        <Modal trigger={
            <button className="px-5 py-2 rounded overflow-hidden focus:outline-none focus:shadow-outline bg-primary-400 text-light text-sm lg:text-base">Open modal</button>}>
            <p>This is the modal.</p>
        </Modal>
    </Layout>
    )
}

export default Index