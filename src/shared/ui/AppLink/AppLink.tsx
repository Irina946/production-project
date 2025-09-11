import { classNames } from "shared/lib/classNames/classNames"
import styles from './AppLink.module.scss'
import { Link, LinkProps } from "react-router-dom"
import { FC } from "react"

export enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    RED = 'red'
}

interface IAppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLinkProps> = (props) => {
    const {
        to,
        className,
        children, 
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(styles.appLink, { }, [className, styles[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
