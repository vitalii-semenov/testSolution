function solution (s = '', k = 0) {
    if (s.length <= k) return 1;
    let arrayOfString = s.split(' ');
    let smsCount = 0;
    arrayOfString.reduce((prev, curr, index, arr) => {
        if (curr.length > k) {
            smsCount = -1;
        }
        prev += curr
        if (prev.length <= k && smsCount !== -1) {
            return prev + ' ';
        } else if (prev.length > k && smsCount !== -1) {
            smsCount += 1;
            if (index === arr.length - 1) return prev = curr;
            return prev = curr + ' ';
        }
    }, '')
    return smsCount;
}

let res = solution('Some text are very long but some are not', 15);
console.log(res);
