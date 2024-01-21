function parseExpression(arr: string[]) {
    const parsedExpression = arr.map((item) => {
        if (item == 'sin^-1(') {
            return 'asin(';
        } else if (item == 'cos^-1(') {
            return 'acos(';
        } else if (item == 'tan^-1(') {
            return 'atan(';
        } else if (item == 'x') {
            return '*';
        } else if (item == '÷') {
            return '/';
        } else {
            return item
        }
    });

    return parsedExpression;
};

export { parseExpression };
