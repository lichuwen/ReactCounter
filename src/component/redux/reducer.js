export default (state = 0, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "refresh":
            return 0;
        default:
            return state;
    }
};