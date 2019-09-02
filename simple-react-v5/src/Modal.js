import React, { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal')

const Modal = ({ children }) => {
  const elRef = useRef(null)
  let currentEl = elRef.current
  if (!currentEl) {
    currentEl = document.createElement('div')
  }
  useEffect(() => {
    modalRoot.appendChild(currentEl)
    return () => modalRoot.removeChild(currentEl)
  }, [])
  return createPortal(<div>{children}</div>, currentEl)
}

export default Modal
