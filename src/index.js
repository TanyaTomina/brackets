module.exports = function check(str, bracketsConfig) {
    const open_array = [];
    const close_array = [];
    let stack_open = [];

    for(let j = 0; j < bracketsConfig.length; j++) {
        open_array.push(bracketsConfig[j][0]);
        close_array.push(bracketsConfig[j][1]);
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < open_array.length; j++) {
            if (str[i] === open_array[j] && str[i] === close_array[j]) {
                if (stack_open[stack_open.length - 1] === j) {
                    stack_open.pop();
                } else {
                    stack_open.push(j);
                }
            } else if (str[i] === open_array[j]) {
                stack_open.push(j);
            } else if (str[i] === close_array[j]) {
                if (stack_open.pop() === j) {
                } else {
                    return  false;
                }
            }
        }
    }
    if (stack_open.length) {
        return false;
    } else {
        return true;
    }
}
