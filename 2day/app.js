
console.log("lesson 2");
let basePrice = 25_000;
let discount = 50; // in percents
let discountPrice = basePrice * discount / 100
let salePrice = basePrice - discountPrice;

console.log("Sale price = ", salePrice); 
// 1.data types - типы данных
// 2.number - числовой
// 3.boolean - числовой
// 4.undefined - неопределенный
// 5.null - пустой
// 6.object - обьект
// --------
//7. BigInt
//8. Symbol

let promocode = "GEEKS_SUMMER_2024";

let iSstudentPaid = true;
let isStudentGraduated = false;

let studentPassport = null;
let studentEmail; //undefined

console.log("passport:", studentPassport);
console.log("email:", studentEmail);

// studentPassport = {
//     //key: value
// }



studentPassport = {
    series: "ID",
    no: "123456",
    inn: "2434352132",
    issueDate: "01.01.2020",
    expireDate: "01.01.2030",
    hasExpired: false,
};

let frontendTeachers = {
    "HTML,CSS" : "FELIX",
    "JaVaScript" : "Evgeniy",
    "React, Redux" : "Dastan",
};

let group40 = {
    course: "Frontend",
    order: 40,
    time: "17:00-19:00",
    startDate: "29062024",
    currentTeacher: "Evgeniy",
    currentMonth: 2,
    isActive: true,
    finishDate: null,
}



let groupName = "Geeks" + group40.order + "-";

if(group40.time === "17:00-19:00"){
    groupName = groupName + "1";
}else{
    groupName = groupName + "2";

}

switch(group40.course){
   case "Frontend":
    groupName += "F";
    break;
   case "Backend":
    groupName += "B";
    break;
   case "Android":
    groupName += "A";
    break;
   case "IOS":
    groupName += "I";
    break;
}

groupName += group40.startDate;

console.log("Group name:", groupName); //Geeks 40-1F29052024

let geeksCompanyName = "OcOO \"Сигма Солюшенс\"";

console.log(geeksCompanyName);