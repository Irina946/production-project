import { classNames } from "shared/lib/classNames/classNames"
import * as styles from './LanguageSwither.module.scss'
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ILanguageSwitherProps {
    className?: string
}

export const LanguageSwither = ({ className }: ILanguageSwitherProps) => {

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            onClick={toggle}
            className={classNames(styles.LanguageSwither, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {t(i18n.language === 'ru' ? 'Русский' : 'Английский')}
        </Button>
    )
}
