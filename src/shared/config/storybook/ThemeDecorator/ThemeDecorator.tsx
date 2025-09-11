import 'app/styles/index.scss'
import type { Decorator } from '@storybook/react-webpack5'
import { Theme } from 'app/providers/ThemeProvider'
// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): Decorator =>  (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
)