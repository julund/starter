import { useRouter } from 'next/router'
import NextLink from 'next/link'

const Link = ({href, className = '', activeClassName = '', inactiveClassName = '', children, ...rest}) => {
    if (!href) return null
    const router = useRouter()
    const allClasses = `${className} ${(router.pathname === href) ? activeClassName : inactiveClassName}`
    return (
        <NextLink href={href}>
            <a {...rest} className={allClasses}>{children}</a>
        </NextLink>
    )
}
export default Link;