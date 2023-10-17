"use strict";
// ***********************DataType********************
// const a:string | number ="{34}"
// console.log(a)
const func = (a, b, l) => {
    if (typeof l === "undefined")
        return a * b;
    return a * b * l;
};
func(23, 432);
