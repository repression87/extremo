console.log("lesson 4")

let students = ["adilet", "RENATA", "SalTanat", "bARikr", "MaRseL"];
let newStudents = []

for(let student of students){
    let firstLetter = student[0];
    let restLetters = student.slice(1);
    student = firstLetter.toUpperCase() + restLetters.toLocaleLowerCase();
    newStudents.push(student)
}
console.log(students)
console.log(newStudents)


function calculatePrice(price, discount) {
    let priceWithDiscount = price - price * discount / 100;
    return priceWithDiscount; 
}
console.log(calculatePrice(1000, 40))


function calculatePriceWithPromocode (price, promocode) {

    switch(promocode.toUpperCase()) {
        case "GEEKS SUMMER":
            return  price - price * 0.2; 
    }

}    