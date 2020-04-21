export const todoInputHandler = (text) => {
    return {
        type: "ON_CLICK",
        payload: text,
    };
};

export const todoChangeHandler =(text)=>{
    return {
        type: "ON_CHANGE",
        payload: text,
    };
}