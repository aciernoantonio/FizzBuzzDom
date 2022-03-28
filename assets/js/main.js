const numbersElement = document.querySelector(".numbers")


//stampare in console numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    /* console.log(i); */
    

    if (i % 3 == 0) {
       //se i è multiplo di 3 stampa Fizz
       numbersElement.innerHTML += `Fizz`

    } else if (i % 5 == 0) {
        //se i è multiplo di 5 stampa buzz
        numbersElement.innerHTML += `Buzz`

    } else if (i % 3 == 0 && i % 5 == 0) {
        //se i è multiplo sia di 3 che di 5 stampa fizzbuzz
        numbersElement.innerHTML+= `FizzBuzz`

    } else {
        //altrimenti stampa i
        numbersElement.innerHTML += `${i}`
    }
}


