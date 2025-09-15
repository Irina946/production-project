import { classNames } from "shared/lib/classNames/classNames";
import styles from './LoginForm.module.scss';
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface ILoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.loginForm, {}, [className])}>
            <Input
                type="text"
                placeholder={t('Логин')}
                className={styles.input}
            />
            <Input
                type="text"
                placeholder={t('Пароль')}
                className={styles.input}
            />
            <Button className={styles.loginBtn} theme={ButtonTheme.BACKGROUND_INVERTED}>
                {t('Войти')}
            </Button>
        </div>
    )
}
