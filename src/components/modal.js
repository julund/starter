import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { XSolid } from '@graywolfai/react-heroicons'
import { Spring, animated, config} from 'react-spring/renderprops.cjs'
import {useLockBodyScroll, useToggle} from 'react-use'
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

    const [open, setOpen] = useState(false)
    const [locked, toggleLocked] = useToggle(false)
    useLockBodyScroll(locked);

    const toggle = () => {
        toggleLocked()
        setOpen(!open)
    }

    const Trigger = props => trigger || <button type="button" {...props} >Open</button>
    const fade = {
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: config.gentle,
    }
    const spring = {
        from: { opacity: 0, transform: 'scale3d(0,0,1) translate3D(0,-15px,0', },
        to: { opacity: 1, transform: 'scale3d(1,1,1) translate3D(0,0px,0', },
        config: config.wobbly,
    }

    return (
        <>
            <span onClick={() => toggle()}><Trigger /></span>
            {open && (
                <ClientOnlyPortal selector="#modal">
                    <Spring native {...fade}>
                        {fade =>
                            <animated.div style={fade} className="fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex items-center justify-center p-3">
                                <div onClick={() => toggle()} className="fixed inset-0 z-0 bg-gray-900 bg-opacity-75"></div>
                                <Spring native {...spring}>
                                    {spring =>
                                    <animated.div style={spring} className="bg-white w-72 max-w-lg rounded-lg overflow-hidden z-10 px-3 lg:px-6 py-4">
                                        <div className="flex justify-center"></div>
                                        <div className="flex flex-col items-center space-y-2">
                                            {children}
                                        </div>
                                        <div className="flex justify-center pt-4">
                                            <Button onClick={() => toggle()} type="button">
                                                <XSolid className="h-4" /> Close
                                            </Button>
                                        </div>
                                    </animated.div>}
                                </Spring>

                            </animated.div>}
                    </Spring>
                </ClientOnlyPortal>
            )}
        </>
    )
}