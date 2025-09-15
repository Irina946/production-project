import { classNames } from "shared/lib/classNames/classNames"
import styles from './LoginModal.module.scss'
import { Modal } from "shared/ui/Modals/Modal"
import { LoginForm } from "../LoginForm/LoginForm"

interface ILoginModalProps {
    className?: string,
    isOpen?: boolean,
    onClose?: () => void
}

export const LoginModal = (props: ILoginModalProps) => {
    const {
        className,
        isOpen,
        onClose
    } = props
    return (
        <Modal
            className={classNames(styles.loginModal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    )
}
