import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LanguageSwither } from './LanguageSwither';



const meta = {
    title: 'widgets/LanguageSwither',
    component: LanguageSwither,
} satisfies Meta<typeof LanguageSwither>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {

};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};





