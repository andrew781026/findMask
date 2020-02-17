import _ from "lodash";

const debounceMap = {};

// Define the method directly in your class
// 產生延遲一秒效果的 function
// 參考資料 : https://stackoverflow.com/questions/36294134/lodash-debounce-with-react-input
const getDebounceFunc = (name, wait = 100) => {

    const tempFunc = debounceMap[name];

    if (tempFunc) {

        return tempFunc;

    } else {

        const newTempFunc = _.debounce(func => {

            if (func[Symbol.toStringTag] === 'AsyncFunction') return func().then(); // func is asyncFunc
            else return func();

        }, wait);
        debounceMap[name] = newTempFunc;
        return newTempFunc;
    }
};

export {
    getDebounceFunc,
};
