/*
vovem-ugo v2.4.1 | Ugo is mathematics an open-source library for JavaScript commonJS 
Copyright 8/6/2022, 21:10:13 PM | VovemDev | MIT license 
*/

// Median of array integer
module.exports = function medianArray (n){
    const { length } = n;
    n.sort((c, d) => c - d);
    if(length % 2 === 0){
        return (n[length / 2 -1] + n[length / 2 ]) / 2;
    }
    return n[(length - 1) / 2];
};