import { Button, ButtonTheme } from "shared/ui/Button/Button"
import { useEffect, useState } from "react"


export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);


    return (
        <Button
            onClick={onThrow}
            theme={ButtonTheme.CLEAR}
            style={{ fontSize: '32px', height: '32px', width: '32px', marginTop: '10px' }}
        >
            {'🐛'}
        </Button>
    )
}
