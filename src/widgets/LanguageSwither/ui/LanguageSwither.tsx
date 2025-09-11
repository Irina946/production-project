import { classNames } from "shared/lib/classNames/classNames"
import styles from './LanguageSwither.module.scss'
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ILanguageSwitherProps {
    className?: string;
    short?: boolean
}

export const LanguageSwither = ({ className, short }: ILanguageSwitherProps) => {

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            onClick={toggle}
            className={classNames(styles.languageSwither, {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {short ? t('Короткий язык') : t(i18n.language === 'ru' ? 'Русский' : 'Английский')}
        </Button>
    )
}
