import { componentRender } from "shared/lib/tests/componentRender/componentRender"
import { Counter } from "./Counter"
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

const user = userEvent.setup()

describe('Counter', () => {
    test('should render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 1 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    })
    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 1 } },
        });
        await user.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('2');
    })
    test('decrement', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 1 } },
        });
        await user.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
    })
})

