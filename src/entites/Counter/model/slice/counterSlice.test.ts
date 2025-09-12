import { counterReducer, counterActions } from "./counterSlice"
import { ICounterSchema } from "../types/counterSchema";

describe('counterSlice', () => {
    test('increment', () => {
        const state: ICounterSchema = {
            value: 1,
        }
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 2 });
    })
    test('decrement', () => {
        const state: ICounterSchema = {
            value: 1,
        }
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 0 });
    })
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    })
})