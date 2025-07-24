import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import * as styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"

interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {
    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div></div>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to="/">Main</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to="/about">About</AppLink>
            </div>

        </div>
    )
}

