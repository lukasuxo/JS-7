
// 1. 1-დან 15-მდე რიცხვების დაბეჭდვა და თუ რიცხვი 5-ზე მეტია, დაბეჭდვა "დიდია 5-ზე":

for (let i = 1; i <= 15; i++) {  
    if(i > 5) {
        console.log(i, "მეტია 5-ზე");
    } else {
        console.log(i);  
    }
}

// 2. მასივიდან [3, 6, 9, 12, 15] მხოლოდ ლუწი რიცხვების გამოტანა:

let numbers = [3, 6, 9, 12, 15]

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
    
}

// 3. სტრიქონის თითოეული ასოს დაბეჭდვა და თუ ასო 'a'-ია, დამატებითი ტექსტის დაბეჭდვა:

let letter = "zdaroba braci lukavar suxo" 

for (let i = 0; i < letter.length; i++) {
   if(letter[i] === "a" ) {
    console.log(letter[i] , "ასო ა");
   } else {
    console.log(letter[i]);
   }
    
}


// 4. მასივიდან ["red", "green", "blue", "yellow"] მხოლოდ გრძელი სიტყვების (5 ასოზე მეტი) გამოტანა:

let words = ["red", "green", "blue", "yellow"]

for (let i = 0; i < words.length; i++) {
    if(words[i].length > 5 ) {
          console.log(words[i], "5 ასოზე მეტია");
    } 
}

// 5. 1-დან 50-მდე რიცხვების გამოტანა, რომლებიც 7-ზე იყოფა და დაბეჭდვა "გაყოფადია 7-ზე":

for (let i = 1; i < 50; i++) {
   if (i % 7 === 0)
    console.log(i, "გაყოფილია 7-ზე");
}

// 6. მასივის [4, 8, 12, 16, 20] თითოეული ელემენტის გამრავლება 2-ზე და შედეგის დაბეჭდვა:
let num = [4, 8, 12, 16, 20] 

for (let i = 0; i < num.length; i++) {
    let result = num[i] * 2
    console.log(result);
    
}

// 7. სტრიქონის 'javascript' თითოეული ასოს დაბეჭდვა და თუ ასო 'j'-ია, შეწყვეტა: (for loop-ს შეუძლია სტრინგსაც გადაუაროს let word = 'javascript';



let word = "javascript";

for (let i = 0; i < word.length; i++) {
    if (word[i] === 'j') {
        console.log("შეჩერდა 'j'");
        break;
        
    }
    console.log(word[i]);  
}

// 8. მასივიდან [5, 10, 15, 20, 25] მხოლოდ იმ რიცხვების დაბეჭდვა, რომლებიც 5-ზე იყოფა:

let num2 = [5, 10, 15, 20, 25]

for (let i = 0; i < num2.length; i++) {
   if(num2[i] % 5 === 0 ) {
    console.log(num2[i], "იყოფა 5 ზე" );
   }
    
}

// 9. სტრიქონში 'hello world' თითოეული ასოს დაბეჭდვა, გამოტოვებით ასო 'o':

let stc = "hello world"
for (let i = 0; i < stc.length; i++) {
   if(stc[i] !== "o") {
    console.log(stc[i]);
   }
}



// 10. მასივიდან [1, 2, 3, 4, 5, 6] მხოლოდ ლუწი რიცხვების ჯამის გამოთვლა:

let msv = [1, 2, 3, 4, 5, 6] 

let sum = 0

for (let i = 0; i < msv.length; i++) {
    if(msv[i] % 2 === 0) {
       sum += msv[i]
    }
     
    
}
console.log("ლუწი რიცვხების ჯამი" , sum);

// 11. რიცხვის 10 გამრავლების ტაბულის დაბეჭდვა: (
// 10 * 1 = 10
// 10 * 2 = 20
// 10 * 3 = 30
// 10 * 4 = 40
// 10 * 5 = 50
// 10 * 6 = 60
// 10 * 7 = 70
// 10 * 8 = 80
// 10 * 9 = 90
// 10 * 10 = 100
// )

let num3 = 10

for (let i = 1; i <= 10; i++) {
    let result = num3 * i
    console.log(`${num3} x ${i} = ${result}`);
    
}

// 12. მასივიდან [2, 7, 4, 9, 5] თითოეული ელემენტის გამოთვლა და თუ რიცხვი 4-ზე მეტია, მისი გამრავლება 3-ზე:

let number = [2, 7, 4, 9, 5]

for (let i = 0; i < number.length; i++) {
    if(number[i] > 4 ) {
        let result = number[i] * 3
        console.log(result);
    }  else {
        console.log(number[i]);
    }
    
    
}

// 13. 1-დან 30-მდე ყველა რიცხვის დაბეჭდვა, ხოლო თუ რიცხვი 10-ზე მეტია, დამატებითი 
// ტექსტის დაბეჭდვა:

for (let i = 0; i < 30; i++) {
  if ( i > 10) {
    console.log(i, " მეტია 10-ზე");
  } else {
    console.log(i);
  }
    
}

// 14. სტრიქონში 'frontend' ასოს 'e' პოვნისას, ტექსტის "ნაპოვნია e" დაბეჭდვა:

let snts = 'fronted'

for (let i = 0; i < snts.length; i++) {
   if(snts[i] === 'e') {
    console.log(i, 'ნაპოვნია e');
   }
    
}

// 15. მასივიდან [100, 200, 300, 400, 500] იმ ელემენტების გამოტანა, რომლებიც 250-ზე ნაკლებია:

let masive = [100, 200, 300, 400, 500] 

for (let i = 0; i < masive.length; i++) {
    if(masive[i] <= 250) {
        console.log(masive[i]);
    }
    
}