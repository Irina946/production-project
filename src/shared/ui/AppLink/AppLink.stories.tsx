import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';


const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        children: 'AppLink',
        to: '/'
    }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    }
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.INVERTED
    }
};

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED
    }
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.INVERTED
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const RedDark: Story = {
    args: {
        theme: AppLinkTheme.RED
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};



