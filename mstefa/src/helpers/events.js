import { EventEmitter } from "events";

let productEvents = new EventEmitter();
// EChangedHeartStatus
// EActiveAddToCart
// EActiveDeleteFromCart
// EActiveDeleteFromLikes

let cartEvents = new EventEmitter();
// EChangedProductSubtotal 

let modalEvents = new EventEmitter();
// EOpenedModalWindow 
// EClosedModalWindow 

export { productEvents, cartEvents, modalEvents };