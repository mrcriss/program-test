const isPrimeNumber = function(num) {
    for(var i = 2; i < num; i++) {
        if  (num % i === 0) {
            return false;
        }
    }

    return num > 1;
};

const fibonacci = (num) => {
    if (num <= 1) {
        return 1;
    }
		
    return fibonacci(num - 1) + fibonacci(num - 2);
};

function nextPrimeFibonacciNumber(number) {
    let answer = 0;
    let index = 1;
    
    do {
        const fibonacciNumber = fibonacci(index);
			
        console.log('fib', fibonacciNumber, number);

        if (fibonacciNumber > number) {
            if (isPrimeNumber(fibonacciNumber)) {
                answer = fibonacciNumber;
            } else {
                index ++;    
                console.warn('bumping to ', fibonacciNumber);
            }
        } else {
            index ++;   
            console.warn('bumping to', fibonacciNumber);
        }
    } while (answer <= 0);
    
    console.warn('Next prime fib ', answer);
}

nextPrimeFibonacciNumber(20);