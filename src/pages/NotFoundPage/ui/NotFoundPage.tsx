import { classNames } from "shared/lib/classNames/classNames"
import * as styles from './NotFoundPage.module.scss'
import { useTranslation } from "react-i18next";

interface INotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({className}: INotFoundPageProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    )
}
