// import { useSpring, animated, config } from 'react-spring'
import { Spring, animated, config} from 'react-spring/renderprops.cjs'

const Content = props => {
    // const spring = useSpring({
    //     from: { opacity: 0, transform: 'translate3D(0,-15px,0', },
    //     to: { opacity: 1, transform: 'translate3D(0,0px,0', },
    //     config: config.wobbly,
    // })
    const spring = {
        from: { opacity: 0, transform: 'translate3D(0,-15px,0', },
        to: { opacity: 1, transform: 'translate3D(0,0px,0', },
        config: config.wobbly,
    }
    return (
        <div className="font-body container h-full mx-auto p-4 bg-gray-50">
            {/* <animated.div style={spring}>{props.children}</animated.div> */}
            <Spring native from={spring.from} to={spring.to} config={spring.config}>
                {spring => <animated.div style={spring}>{props.children}</animated.div>}
            </Spring>
        </div>
    )
};

export default Content;