import { classNames } from "shared/lib/classNames/classNames"
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/themeDark.svg";
import LightIcon from "shared/assets/icons/themeLight.svg";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface IThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {

    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>

    )
}
