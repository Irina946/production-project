import { classNames } from "shared/lib/classNames/classNames"
import * as styles from './ErrorPage.module.scss'
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface IErrorPageProps {
    className?: string
}

export const ErrorPage = ({className}: IErrorPageProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(styles.ErrorPage, {}, [className])}>
            <p>{t('Что-то пошло не так')}</p>
            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
