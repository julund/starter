import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { XSolid } from '@graywolfai/react-heroicons'
import { Spring, animated, config} from 'react-spring/renderprops.cjs'
import Button from './button'

function ClientOnlyPortal({ children, selector }) {
    const ref = useRef()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector(selector)
        setMounted(true)
    }, [selector])

    return mounted ? createPortal(children, ref.current) : null
}

export default function Modal({ children, trigger }) {

    const [open, setOpen] = useState()
    const Trigger = props => trigger || <button type="button" {...props} >Open</button>
    const spring = {
        from: { opacity: 0, transform: 'translate3D(0,-15px,0', },
        to: { opacity: 1, transform: 'translate3D(0,0px,0', },
        config: config.gentle,
    }

    return (
        <>
            <span onClick={() => setOpen(true)}><Trigger /></span>
            {open && (
                <ClientOnlyPortal selector="#modal">
                    <Spring native from={spring.from} to={spring.to} config={spring.config}>
                        {spring =>
                            <animated.div style={spring} className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex items-center justify-center p-3">
                                <div onClick={() => setOpen(false)} className="fixed inset-0 z-0 bg-gray-900 bg-opacity-75"></div>
                                <div className="bg-white w-72 max-w-lg rounded-lg overflow-hidden z-10 px-3 lg:px-6 py-4">
                                    <div className="flex justify-center">
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        {children}
                                    </div>
                                    <div className="flex justify-center pt-4">
                                        <Button onClick={() => setOpen(false)} type="button">
                                            Dismiss
                                        </Button>
                                    </div>
                                </div>
                            </animated.div>}
                    </Spring>
                </ClientOnlyPortal>
            )}
        </>
    )
}