import { classNames } from "shared/lib/classNames/classNames";
import styles from './Input.module.scss';
import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useState } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: IInputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <input
            className={classNames(styles.input, {}, [className])}
            value={value}
            onChange={onChangeHandler}
            type={type}
            placeholder={placeholder}
            {...otherProps}
        />
    )
})

Input.displayName = 'Input';