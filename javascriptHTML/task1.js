/*
    as default sort order is from min to max
    you can set argument 'order' in 'false' state with any comfort for you ways
    like 0, '', false or etc.
*/

function sotringNum(array, order = true) {
    if (order) {
        return array.sort((a, b) => a - b);
    } else {
        return array.sort((a, b) => b - a);
    }
}

