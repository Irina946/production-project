import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './about';


const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};




