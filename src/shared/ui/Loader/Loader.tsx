import { classNames } from "shared/lib/classNames/classNames"
import * as styles from './Loader.module.scss'

interface ILoaderProps {
    className?: string
}

export const Loader = ({className}: ILoaderProps) => {
    return (
        <div className={classNames(styles.Loader, {}, [className])}>
        </div>
    )
}
