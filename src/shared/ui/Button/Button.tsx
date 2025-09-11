import { classNames } from "shared/lib/classNames/classNames"
import styles from './Button.module.scss'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: React.FC<IButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(styles.button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
