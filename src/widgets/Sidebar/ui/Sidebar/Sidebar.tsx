import { classNames } from "shared/lib/classNames/classNames"
import styles from './Sidebar.module.scss'
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwither } from "widgets/LanguageSwither";

interface ISidebarProps {
    className?: string
}

export const Sidebar = ({ className }: ISidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collapseBtn}
            >
                {collapsed ? '>' : '<'}
            </button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwither />
            </div>
        </div>
    )
}
