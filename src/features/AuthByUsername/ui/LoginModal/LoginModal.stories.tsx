import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginModal } from './LoginModal';


const meta = {
    title: 'features/LoginModal',
    component: LoginModal,
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standart: Story = {
    args: {
        isOpen: true
    }
};

export const Dark: Story = {
    args: {
        isOpen: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

