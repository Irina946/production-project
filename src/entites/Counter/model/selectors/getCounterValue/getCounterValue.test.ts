import { IStateSchema } from "app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue"

describe('getCounterValue', () => {
    test('', () => {
        const state: Partial<IStateSchema> = {
            counter: { value: 1 },
        }
        expect(getCounterValue(state as IStateSchema)).toEqual(1);
    })
})