export type CartItemType = {
    sku: string,
    name: string,
    price:number,
    qty:number
}

type CartStateType = {cart:CartItemType[]}

const initCartState:CartStateType = {cart:[]};

const REDUCER_ACTION_TYPE = {
    ADD:"ADD",
    REMOVE:"REMOVE",
    QUANTITY:"QUANTITY",
    SUBMIT:"SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
    type:string,
    payload?: CartItemType
}

const reducer = (state: CartStateType, action: ReducerAction): CartStateType =>{
    switch(action.type) {
        case REDUCER_ACTION_TYPE.ADD : {
            if(!action.payload) {
                throw new Error("Action payload is missing in ADD")
            }
            const {sku,name,price} = action.payload;
        }
        case REDUCER_ACTION_TYPE.REMOVE : {
            if(!action.payload) {
                throw new Error("Action payload is missing in REMOVE")
            }

        }
        case REDUCER_ACTION_TYPE.QUANTITY : {
            if(!action.payload) {
                throw new Error("Action payload is missing in QUANTITY")
            }
        }
        case REDUCER_ACTION_TYPE.SUBMIT : {
            return {...state, cart:[]}
        }
        default:
            throw new Error("unIdentified reducer action type");
    }
}