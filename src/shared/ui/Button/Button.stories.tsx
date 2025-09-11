import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta = {
    title: 'shared/Button',
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    }
};

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR,
    }
};

export const ClearDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Outlined: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
    }
};

export const OutlinedDark: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};


