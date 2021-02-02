import Layout from "../components/layout"
import Content from "../components/content"
import { Keyframes, animated } from 'react-spring/renderprops.cjs'
import { MenuSolid, XSolid } from '@graywolfai/react-heroicons'
import { useState } from "react"

const Sidebar = Keyframes.Spring({
  open: { x: 0, opacity:1 },
  close: { x: -100, opacity: 0 }
})

function Contact() { 

    const [isOpen, setIsOpen] = useState(false);
    const state = isOpen === undefined ? 'peek' : isOpen ? 'open' : 'close'
    return (
    <Layout page="Contact">
        <Content>
            <a role="button" className="block elect-none text-gray-800" aria-label="menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <XSolid className="h-6 fill-current" /> : <MenuSolid className="h-6 fill-current" />}
            </a>
            <Sidebar native state={state}>
                {({ x, opacity }) => (
                    <animated.div
                        className="w-28 bg-gray-300 h-full p-4"
                        style={{ opacity: opacity, transform: x.interpolate(x => `translate3d(${x}%,0,0)`), }}
                    >
                        Hello
                    </animated.div>)}
            </Sidebar>
        </Content>
    </Layout>
    )
}

export default Contact