import { classNames } from "shared/lib/classNames/classNames"
import * as styles from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/themeDark.svg";
import LightIcon from "shared/assets/icons/themeLight.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface IThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(styles.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>

    )
}
