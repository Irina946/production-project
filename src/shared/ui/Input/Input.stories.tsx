import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Input } from './Input';
import { Theme } from 'app/providers/ThemeProvider';


const meta = {
    title: 'shared/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standart: Story = {
    args: {
        placeholder: 'Введите текст',
    }
};

export const Dark: Story = {
    args: {
        placeholder: 'Введите текст',
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const StandartWithValue: Story = {
    args: {
        placeholder: 'Введите текст',
        value: 'Text'
    }
};

export const DarkWithValue: Story = {
    args: {
        placeholder: 'Введите текст',
        value: 'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

