import { classNames } from "shared/lib/classNames/classNames"
import * as styles from './Sidebar.module.scss'
import React, { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LanguageSwither } from "widgets/LanguageSwither";

interface ISidebarProps {
    className?: string
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }: ISidebarProps) => {

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
