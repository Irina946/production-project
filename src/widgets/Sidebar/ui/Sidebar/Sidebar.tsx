import { classNames } from "shared/lib/classNames/classNames"
import styles from './Sidebar.module.scss'
import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwither } from "widgets/LanguageSwither";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routesConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/About.svg';
import MainIcon from 'shared/assets/icons/Home.svg';

interface ISidebarProps {
    className?: string
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }: ISidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    }

    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={styles.links}>

                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.main}
                    className={styles.item}
                >
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>{t('Главная')}</span>

                </AppLink>

                <AppLink
                    theme={AppLinkTheme.INVERTED}
                    to={RoutePath.about}
                    className={styles.item}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwither
                    short={collapsed}
                />
            </div>
        </div>
    )
}
