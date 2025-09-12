import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standart: Story = {
    args: {
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium esse animi totam, eius ducimus illum temporibus molestias, impedit atque, eum architecto soluta suscipit ad. Consequatur corporis aut assumenda consectetur cum!',
        isOpen: true
    }
};

export const Dark: Story = {
    args: {
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium esse animi totam, eius ducimus illum temporibus molestias, impedit atque, eum architecto soluta suscipit ad. Consequatur corporis aut assumenda consectetur cum!',
        isOpen: true
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

