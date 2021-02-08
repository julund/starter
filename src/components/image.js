import NextImage from 'next/image'
const Image = (props) => {
    return (
        <NextImage {...props}>
            {props.children}
        </NextImage>
    )
}
export default Image;