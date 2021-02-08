import NextImage from 'next/image'
// import { Transition, animated } from 'react-spring/renderprops.cjs'

// const AnimatedImage = animated(NextImage)

const Image = (props) => {
    return (
        <NextImage {...props}>
            {props.children}
        </NextImage>
        // <Transition
        //     items={true}
        //     from={{ opacity: 0 }}
        //     enter={{ opacity: 1 }}
        //     leave={{ opacity: 0 }}>
        //     {show => show && (styles => <AnimatedImage style={styles} {...props}>{props.children}</AnimatedImage>)}
        // </Transition>
    )
}
export default Image;