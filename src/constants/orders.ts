export const ORDER_RADIUS_BOUNDARY_MILES = 5; // in miles. Should we have this value come from the server instead?
export const ACCEPT_ORDER_TO_PREPARE_TIMEOUT = 600000; //Partner has 5 minutes to respond to an order. After 5 minutes, the order is canceled and the user is refunded. Partners get points deducted if they keep dropping orders
export const ACCEPT_ORDER_TO_PREPARE_TIMEOUT_WARNING = 120000; // time to start warning partner about order
export const ORDER_ACCEPT_TIMEDOUT_DISPLAY_TIMEOUT = 10000; //Additional time to show timedout orders
