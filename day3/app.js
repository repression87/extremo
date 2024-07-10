// let trafficColor = "";

// if(trafficColor === "green"){
//     console.log("GO");
// }else if (trafficColor === "зеленый"){
//     console.log("GO");
// }

// switch (trafficColor) {
//     case "green":
//         console.log("Go");
//         break;
//     case "yellow":
//         console.log("wait...")
//         break
//     case "Red":
//             console.log("")
//             break;
//             default:    
//             console.warn("Unknown color")
// }

// let weekday = "mon";

// if(weekday === "wed" || weekday === "sat"){
//     console.log("Yohoo! Today lesson in GEEEKS");
// }else{
//     console.log("Normal day");

// }

// let studentLogin = "MarselMM";
// let studentPassword = prompt("1232432423")

// if(studentLogin === "MarselMM" && studentPassword === "test1232test"){
//     console.log("weLCOME to geeks");
// }else{
//     console.log("not password")
// }

let students = ["Abay" , "Milana" , "Marsel" , "Aibike" , "Arsen" , "Ayana"]

console.log("4th student is ", students[3]);
console.log("Last student is ", students[students.length - 1]);

console.log("Group consists of" + students.length + " students");

let newStudent = "Ulan";

// students.push(newStudent);
// students.unshift(newStudent)
// students.splice(3, 0, newStudent)
let AyanaIndex = students.indexOf("Ayana")
students.splice(AyanaIndex, 1)

console.log("Group consists of" + students.length + " students");
console.log("Last student is ", students[students.length - 1]);

let homeworks = [null, null, null, null, null, null, null, null,]

homeworks[0] = 10;
homeworks[1] = 8;

console.log(homeworks)

let homeworksPointsSum = 0; 

for(let homework of homeworks) {
    if(homework === null){
        continue;
    }else{
        homeworksPointsSum += homework

    }    
}
console.log("Total points:", homeworksPointsSum)

for (let i = 0; i < homeworks.length; i++){
    console.log((i + 1) + "домашнее задание:" , homeworks[i] === null ? "не выполнено" : homeworks[i] + "баллов")

    }
let = complete


