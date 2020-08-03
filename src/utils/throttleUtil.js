const debounceMap = {};

export function debounce(func, delay) {
    var timer = null;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
    }
}

// Define the method directly in your class
// 產生延遲一秒效果的 function
// 參考資料 : https://stackoverflow.com/questions/36294134/lodash-debounce-with-react-input
export const getDebounceFunc = (debounceId, wait = 1000) => {

    const tempFunc = debounceMap[`${debounceId}`];

    if (tempFunc) return tempFunc;
    else {

        const newTempFunc = debounce(func => func(), wait);
        debounceMap[`${debounceId}`] = newTempFunc;
        return newTempFunc;
    }
};


export function throttle(func, threshhold = 250) {
    var last, timer;
    return function () {
        var context = this
        var args = arguments
        var now = +new Date()
        if (last && now < last + threshhold) {
            clearTimeout(timer)
            timer = setTimeout(function () {
                last = now
                func.apply(context, args)
            }, threshhold)
        } else {
            last = now
            func.apply(context, args)
        }
    }
}

const throttleMap = {};

// Define the method directly in your class
// 產生延遲一秒效果的 function
// 參考資料 : https://stackoverflow.com/questions/36294134/lodash-debounce-with-react-input
export const getThrottleFunc = (throttleId, wait = 1000) => {

    const tempFunc = throttleMap[`${throttleId}`];

    if (tempFunc) return tempFunc;
    else {

        const newTempFunc = throttle(func => func(), wait);
        throttleMap[`${throttleId}`] = newTempFunc;
        return newTempFunc;
    }
};
