import 'app/styles/index.scss'
import type { Decorator } from '@storybook/react-webpack5'
import { Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
)