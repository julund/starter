import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { forwardRef } from "react"

const Link = forwardRef(({href, className = '', activeClassName = '', inactiveClassName = '', children, ...rest}, ref) => {
    if (!href) return null
    const router = useRouter()
    const allClasses = `${className} ${(router.pathname === href) ? activeClassName : inactiveClassName}`
    return (
        <NextLink href={href}>
            <a ref={ref} {...rest} className={allClasses}>{children}</a>
        </NextLink>
    )
})
export default Link;