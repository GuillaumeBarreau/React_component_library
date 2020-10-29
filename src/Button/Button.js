import React from 'react'
import styles from './Button.module.css'

export const Button = ({ text, onClick, className, children, ...rest }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.button} ${className}`}
            {...rest}
        >
            {text || children}
        </button>
    )
}

Button.defaultProps = {
    text: 'Click',
}
