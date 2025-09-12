import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button, ButtonSize, ButtonTheme } from './Button';
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
        theme: ButtonTheme.CLEAR,
    }
};

export const ClearDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const ClearInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR_INVERTED,
    }
};

export const ClearInvertedDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Outlined: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    }
};

export const OutlinedL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L
    }
};


export const OutlinedXL: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL
    }
};


export const OutlinedDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Background: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    }
};

export const BackgroundDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    }
};

export const BackgroundInvertedDark: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Square: Story = {
    args: {
        children: '',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    }
};

export const squareL: Story = {
    args: {
        children: '',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        size: ButtonSize.L,
    }
};

export const squareXl: Story = {
    args: {
        children: '',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    }
};
