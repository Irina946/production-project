import { classNames } from "shared/lib/classNames/classNames"
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import { useTranslation } from "react-i18next"
import { Modal } from "shared/ui/Modals/Modal"
import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useCallback, useState } from "react"


interface INavbarProps {
    className?: string
}

export const Navbar = ({ className }: INavbarProps) => {

    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={styles.buttonSignIn}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}></Modal>

        </div>
    )
}

