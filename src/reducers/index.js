const initialState = {
  menu: [],
  total: 0,
  loading: true,
  error: false,
  cart: [],
  cartWindowOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENU_LOADED': 
      return {
        ...state,
        menu: action.payload,
        loading: false
      };
    case 'MENU_REQUESTED': 
      return {
        ...state,
        loading: true
      }
    case 'ERROR_OCCURED':
      return {
        ...state,
        error: true
      }
    case 'ITEM_ADD_TO_CART':
      
    const id = action.payload;
    const item = state.menu.find(el => +el.id === id);
    const findItemInCart = state.cart.find(el => +el.id === id);
    if (!findItemInCart) {
      const newItem = {
        id: item.id,
        price: item.price,
        title: item.title,
        amount: 1
      }
      return {
        ...state,
        cart: [...state.cart, newItem],
        total: state.total + newItem.price
      } 
    }
    else {
      
      let i = state.cart.indexOf(findItemInCart);
      const newItem = {
        id: findItemInCart.id,
        price: findItemInCart.price,
        title: findItemInCart.title,
        amount: findItemInCart.amount + 1
      }

      return {
        ...state,
        cart: [...state.cart.slice(0, i), newItem, ...state.cart.slice(i+1)],
        total: state.total + newItem.price
      }
    }

    case 'ITEM_REMOVE_FROM_CART':
      const idRemove = action.payload;
      const itemToRemove = state.cart.find(el => +el.id === idRemove);
      const indexToRemove = state.cart.indexOf(itemToRemove);
      return {
        ...state,
        cart: [...state.cart.slice(0, indexToRemove), ...state.cart.slice(indexToRemove+1)],
        total: state.total - (itemToRemove.amount * itemToRemove.price)
      }

    case 'INCREASE_ITEM_IN_CART':
      const idToIncr = action.payload;
      const itemToIncr = state.cart.find(el => +el.id === idToIncr);
      let indexToIncr = state.cart.indexOf(itemToIncr);
      itemToIncr.amount += 1;
      
      return {
        ...state,
        cart: [...state.cart.slice(0, indexToIncr), itemToIncr, ...state.cart.slice(indexToIncr+1)],
        total: state.total + itemToIncr.price
      }

      case 'DECREASE_ITEM_IN_CART':
        const idToDecr = action.payload;
        const itemToDecr = state.cart.find(el => +el.id === idToDecr);
        let indexToDecr = state.cart.indexOf(itemToDecr);
        if (itemToDecr.amount === 1) {
          return {
            ...state
          }
        }
        itemToDecr.amount -= 1;
        return {
          ...state,
          cart: [...state.cart.slice(0, indexToDecr), itemToDecr, ...state.cart.slice(indexToDecr+1)],
          total: state.total - itemToDecr.price
        }

        case 'CART_WINDOW_OPEN':
          return {
            ...state,
            cartWindowOpen: true
          }
        case 'CART_WINDOW_CLOSE':
          const closeTarget = action.payload;

          if (closeTarget === document.querySelector('.cart-bg') || 
            closeTarget === document.querySelector('.cart-close-btn') ||
            closeTarget === document.querySelector('.cart-window-btn')
            ) {
            return {
              ...state,
              cartWindowOpen: false
            }
          }
          return {
            ...state
          }
          

    default:
      return state;
  }
};

export default reducer;