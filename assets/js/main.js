const numbersElement = document.querySelector(".numbers")


//stampare in console numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    /* console.log(i); */
    

    if(i % 3 == 0 && i % 5 == 0) {
    //se i è multiplo sia di 3 che di 5 stampa fizzbuzz
    console.log("FizzBuzz");
    numbersElement.innerHTML+= `<div class="fizzbuzz square">FizzBuzz</div>`

    } else if (i % 3 == 0) {
        console.log("Fizz")
       //se i è multiplo di 3 stampa Fizz
       numbersElement.innerHTML += `<div class="fizz square">Fizz</div>`


    } else if (i % 5 == 0) {
        console.log("Buzz")
        //se i è multiplo di 5 stampa buzz
        numbersElement.innerHTML += `<div class="buzz square">Buzz</div>`


    } else {
        console.log(`${i}`)
        //altrimenti stampa i
        numbersElement.innerHTML += `<div class="ordinary square">${i}</div>`
    }
}


