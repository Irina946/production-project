import { ICounterSchema } from "entites/Counter";
import { IUserSchema } from "entites/User";


export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
}

