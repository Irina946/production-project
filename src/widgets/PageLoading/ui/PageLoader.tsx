import { classNames } from "shared/lib/classNames/classNames"
import styles from './PageLoader.module.scss'
import { Loader } from "shared/ui/Loader/Loader"

interface IPageLoaderProps {
    className?: string
}

export const PageLoader = ({className}: IPageLoaderProps) => {
    return (
        <div className={classNames(styles.pageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
