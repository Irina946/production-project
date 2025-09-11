import { classNames } from "shared/lib/classNames/classNames"
import styles from './Loader.module.scss'

interface ILoaderProps {
    className?: string
}

export const Loader = ({className}: ILoaderProps) => {
    return (
        <div className={classNames(styles.loader, {}, [className])}>
        </div>
    )
}
