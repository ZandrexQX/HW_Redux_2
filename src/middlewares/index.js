export const middlewareLog = store => next => action => {
    console.log('Дополнительный эффект');
    setTimeout(() => {
        console.log('тайм-аутыб вызовы апи и т.д.');
    }, 1000);
    return next(action);
}

export const loggerMiddleware = store => next => action => {
    console.log('dispatching', action);
    return next(action);
}