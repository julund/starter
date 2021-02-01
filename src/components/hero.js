import { Spring, Trail, animated, config } from 'react-spring/renderprops.cjs'
import Modal from './modal'
import Button from "./button";

const Hero = props => {
    const fade = { 
        from: { opacity: 1, background: 'rgb(17, 24, 39)'}, 
        to: {opacity: 1, background: 'rgb(75, 85, 99)'}, 
        config: config.gentle
    }
    const spring = {
        from: { transform: 'translate3D(-50px,0,0', },
        to: { transform: 'translate3D(0,0px,0', },
        config: config.wobbly,
    }
    const items = [
        {key:1, className:"font-title text-4xl my-2 text-gray-200", text:"Next.js & tailwind.css starter template"},
        {key:2, className:"font-title text-xl my-2 text-gray-300", text:"Lorem ipsum dolar sit amet."},]
    return (
        <Spring native from={fade.from} to={fade.to} config={fade.config}>
            {fade =>
                <animated.div style={fade}>
                    <div className="flex-grow-0 p-4  h-full">
                        <div className="container mx-auto p-4">
                            
                            <Trail items={items}  keys={item => item.key} from={spring.from} to={spring.to}>
                                {item => props => <div className={item.className} style={props}>{item.text}</div>}
                            </Trail>

                            <Modal className="mx-auto p-4" trigger={
                                <Button className="text-sm">Open modal</Button>}>
                                <p>This is the modal.</p>
                            </Modal>
                        </div>
                    </div>
                </animated.div>}
        </Spring>

    )
};

export default Hero;