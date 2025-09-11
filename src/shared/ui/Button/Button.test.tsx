import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { render, screen } from '@testing-library/react';

describe('ButtonTests', () => {
    test('button render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('button clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });

})