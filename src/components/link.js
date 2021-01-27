import { useRouter } from 'next/router'
import NextLink from 'next/link'

const Link = (props) => {
    if (!props.href) return null
    const router = useRouter()
    const isActive = (router.pathname === props.href)
    const styles = {
        'normal': `hover:underline ${isActive ? 'text-primary-700' : 'text-primary-800'}`,
        'button': `px-4 py-2 rounded-md hover:bg-gray-50 hover:text-primary-600 ${isActive ? 'bg-gray-100 text-primary-700' : 'bg-gray-200 text-primary-800'}`,
        'nav': `border-b-4 hover:border-primary-300 ${isActive ? 'border-primary-300' : 'border-transparent'}`
   }
   const style = styles[props.type || 'normal']
    return (
        <NextLink href={props.href}>
            <a {...props} className={style}>{props.children}</a>
        </NextLink>
    )
}
export default Link;