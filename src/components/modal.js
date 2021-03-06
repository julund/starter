import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { XSolid } from '@graywolfai/react-heroicons'
import { Transition, config} from 'react-spring/renderprops.cjs'
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

    const [isOpen, setOpen] = useState(false)
    const [locked, toggleLocked] = useToggle(false)
    useLockBodyScroll(locked);

    const fade = {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.gentle
    }

    const box = {
        from: { opacity: 0, transform: 'scale3d(0,0,1) translate3D(0,-15px,0)' },
        enter: { opacity: 1, transform: 'scale3d(1,1,1) translate3D(0,0px,0)' },
        leave: { opacity: 0, transform: 'scale3d(0,0,1) translate3D(0,-15px,0)' },
        config: config.wobbly // {tension: 180, friction: 12, velocity: 5},
    }

    const toggle = () => {
        toggleLocked()
        setOpen(!isOpen)
    }

    const Trigger = () => <Button className="text-sm cursor-pointer" onClick={toggle}>{trigger}</Button>

    return (
        <>
            <Trigger/>
            <ClientOnlyPortal selector="#__next-modal">
            <Transition items={isOpen} {...fade}>
                {show => show && (props => 
                    <div style={props} className="fixed inset-0 z-30 bg-gray-900 bg-opacity-75 flex items-center justify-center p-3">
                        <div onClick={toggle} className="fixed inset-0 bg-gray-900 bg-opacity-75"></div>
                        <Transition items={isOpen} {...box}>
                            {show => show && (props => 
                                <div style={props} className="z-10 bg-white w-72 max-w-lg rounded-lg overflow-hidden px-3 lg:px-6 py-4">
                                    <div className="flex flex-col items-center space-y-2">
                                        {children}
                                    </div>
                                    <div className="flex justify-center pt-4">
                                        <Button onClick={toggle} type="button">
                                            <XSolid className="h-4"/> Close
                                        </Button>
                                    </div>
                                </div>)}
                        </Transition>
                    </div>
                )}
            </Transition>
            </ClientOnlyPortal>
        </>
    )
}
