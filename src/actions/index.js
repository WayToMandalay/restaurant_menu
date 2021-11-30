const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  };
};

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED'
  };
};

const errorOccured = () => {
  return {
    type: 'ERROR_OCCURED'
  }
}

const onAddToCart = (id) => {
  return {
    type: 'ITEM_ADD_TO_CART',
    payload: id
  };
};

const onRemoveFromCart = (id) => {
  return {
    type: 'ITEM_REMOVE_FROM_CART',
    payload: id
  };
};

const incrInCart = (id) => {
  return {
    type: 'INCREASE_ITEM_IN_CART',
    payload: id
  };
};

const decrInCart = (id) => {
  return {
    type: 'DECREASE_ITEM_IN_CART',
    payload: id
  };
};

const cartWindowOpen = () => {
  return {
    type: 'CART_WINDOW_OPEN'
  };
};

const cartWindowClose = (target) => {
  return {
    type: 'CART_WINDOW_CLOSE',
    payload: target
  };
};

export {
  menuLoaded,
  menuRequested,
  errorOccured,
  onAddToCart,
  incrInCart,
  decrInCart,
  onRemoveFromCart,
  cartWindowOpen,
  cartWindowClose
};