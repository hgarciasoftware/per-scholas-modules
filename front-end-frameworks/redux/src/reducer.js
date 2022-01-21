export const initialState = {
    groceries: [
        {
          item: 'banana',
          units: '1',
          isPurchased: false,
          id: 0
        },

        {
          item: 'apple',
          units: '2',
          isPurchased: false,
          id: 1
        },

        {
          item: 'orange',
          units: '3',
          isPurchased: false,
          id: 2
        }
    ]
}


export default function reducer(state = initialState, action) {

    switch(action.type) {

        case 'ADD_ITEM': 
        
            return { 
                groceries: [...state.groceries, action.payload] 
            }
        
        case 'TOGGLE_PURCHASE':
          
            return { 
                groceries: state.groceries.map((grocery) => grocery.id === action.payload ? { ...grocery, isPurchased: !grocery.isPurchased } : grocery)
            }

        default: 
            return state
    }

}
