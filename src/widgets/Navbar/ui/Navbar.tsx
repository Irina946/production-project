import { classNames } from "shared/lib/classNames/classNames"
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { useTranslation } from "react-i18next"


interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {

    const {t} = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to="/">{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to="/about">{t('О сайте')}</AppLink>
            </div>

        </div>
    )
}

