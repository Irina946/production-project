import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';



const meta = {
    title: 'widgets/ThemeSwither',
    component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};





