
console.log("Hello main.js");

const MyPersonality ={




generalProfile:{
    
    agreeStatment1:  "I agree that javascript is not easy language but I will do it",
              
    agreeStatement2: "Cohort-27 is awesome ",
             
    agreeStatement3: "i am too lazy to finish my work",

   disAgreeStatement1: "html and css are tricky",
            Why1: "it's fun to work with html and css",
      
    disAgreeStatement2:"People can rarely upset me",
           Why2:  " sometimes they did",

    disAgreeStatement3: "i am very intelligent",
           Why3: " no comments"
},

peopleLikeme:{
    familyName:["My bro","My mom","My dear Husband"," Aryan"],
    familyImage:["../images/1920506_10200784067044551_1882704467_n.jpg",
               "../images/13083258_10204791698550760_4723141851621277596_n.jpg",
               "../images/71750_134459453271030_7435530_n.jpg",
               "../images/11148689_1016053245111642_2670894390235829991_n.jpg"]
},

 Commnunication:{
     type:["I usually talked to my little sib very kindly but sometimesi got angry on them as well ",
           " My instructors already talk the way i want",
           " Teammates should talk one to one each other"]}
            }


const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)

    
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(MyPersonality, "MyPersonality")
const loadDatabase = function (localStorageKey) {
    
    const databaseString = localStorage.getItem(localStorageKey)

    
    return JSON.parse(databaseString)
}
console.log(loadDatabase("MyPersonality"));
const data =loadDatabase("MyPersonality")


// const paragraph=document.getElementById("wrapper")
// paragraph.innerHTML=`<p> Hi, My name is ${Priyanka.generalProfile.name}, my personality type is ${Priyanka.generalProfile.personalityType} 
// in 16personality.com </p>
// <ul>
// <li>You find it easy to stay relaxed even when there is some pressure. : <strong>${Priyanka.generalProfile.type1}
// </strong> </li>
// <li>Being organized is more important to you than being adaptable: <strong>${Priyanka.generalProfile.type1}</strong></li>
// <li>You try to respond to your e-mails as soon as possible and cannot stand a messy inbox: <strong>${Priyanka.generalProfile.type1}</strong>
// </ul></br>
// <ul>
// <li>People can rarely upset you: <strong> ${Priyanka.generalProfile.type2}</strong>
// </li>
// <li>Your travel plans are usually well thought out:<strong> ${Priyanka.generalProfile.type2}</strong>
// </li>
// <li>Being able to develop a plan and stick to it is the most important part of every project:
// <strong> ${Priyanka.generalProfile.type2} </strong> </li>`


// //const people = document.
// const people = document.getElementById("people")
// people.innerHTML=`<h3> There are four people in the list who share the same personality type like me <h3>
//                   <ul>
//                   </ul>`
//console.log(MyPersonality.generalProfile.agreeStatement2)

const placeContent=document.getElementById("container")
const content=document.getElementById("general")
content.innerHTML=`<div class="Agree">
                 <ul> <strong>Agree Statements </strong>
                <li>${MyPersonality.generalProfile.agreeStatment1}</li>
                <li>${MyPersonality.generalProfile.agreeStatement2}</li>
                <li>${MyPersonality.generalProfile.agreeStatement3}</li>
                      </ul></div></br>
                      <div class="disAgree">
                      <ul><strong> Disagree Statement</strong>
                      <li>${MyPersonality.generalProfile.disAgreeStatement1}</li></br>
                     <strong>Why:</strong> ${MyPersonality.generalProfile.Why1} </br>
                     <li>${MyPersonality.generalProfile.disAgreeStatement2}</li></br>
                     <strong>Why:</strong> ${MyPersonality.generalProfile.Why2} </br>
                     <li>${MyPersonality.generalProfile.disAgreeStatement3}</li> </br>
                     <strong>Why: </strong> ${MyPersonality.generalProfile.Why3} </br>
                     </ul> </div>`


const People = document.getElementById("people")
let similarPeople=`<h3> Similar people:<h3>`
for(let i=0 ; i<MyPersonality.peopleLikeme.familyName.length; i++)
{
similarPeople+=`  
                  <div id="people1">
                  <p> ${MyPersonality.peopleLikeme.familyName[i]}
                  
                  </p>
                  </div>`
}
for(let j=0; j<MyPersonality.peopleLikeme.familyImage.length; j++)
{
    similarPeople+=`<div id="image">
                <img src="${MyPersonality.peopleLikeme.familyImage[j]}" alt="family pic" width="300" height="300">
                </div>`
}
People.innerHTML=similarPeople

// function similarPeople(info)
// {
//     placeContent.innerHTML= `<h2>Similar People </h2>
//     <div class="people">
//     </div>
// </div>`
// let div = document.querySelector("people");
// for (let i = 0; i < info.length; i++) {
//     div.innerHTML +=`<div class="family">
//     <img src="${info[i].familyImage}" alt="family Pic">    
//     <p>${info[i].familyName}</p>
// </div>`
// }
// }
// similarPeople(MyPersonality.peopleLikeme.familyImage.familyName)


const commnunicationContent=document.getElementById("communication")
commnunicationContent.innerHTML=`<h2>My communication </h2>
                        <div id= "talk">
                        <ul>
                        <li>${MyPersonality.Commnunication.type[0]}</li>
                        <li>${MyPersonality.Commnunication.type[1]}</li>
                        <li>${MyPersonality.Commnunication.type[2]}</li>
                          </ul> </div>`

// const commnunicationContent=document.getElementById("people")
// commnunicationContent.innerHTML=`<ul id ="communi">My commnunication</h2>`
// let li= document.getElementById("communi")
//       for (let i=0;i<commnunicationContent.Commnunication.length;i++)
//       {
//            li.innerHTML=`<li> `
//       }

