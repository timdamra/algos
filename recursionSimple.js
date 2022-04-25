function count(max, current) {
    if (max === current) return;

    console.log(current);
    count(max, current + 1);
}

function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else if (n <= 0) {
        return 0;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

count(10, 1);
console.log(fibonacci(12));

function count2(num) {
    console.log(num);
    if (num === 1) {
        return 1;
    }

    count2(num - 1);
}

//count2(10);
