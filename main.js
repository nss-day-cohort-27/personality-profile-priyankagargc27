
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
    name:["My bro","My mom","My dear Husband"," Aryan"]

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
const content=document.getElementById("general")
content.innerHTML=`<div class="Agree">
                 <ul> <strong>Agree Statement </strong>
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
People.innerHTML=  `<h3> Similar people:<h3>
                  <div id="people">
                  <p> ${MyPersonality.peopleLikeme.name[0]},${MyPersonality.peopleLikeme.name[1]}, 
                  ${MyPersonality.peopleLikeme.name[2]}, ${MyPersonality.peopleLikeme.name[3]}</p>
                  </div>`
       
const Commnunication=document.getElementById("communication")
Commnunication.innerHTML=`<h2>My communication </h2>
                        <div id= "talk">
                        <ul>
                        <li>${MyPersonality.Commnunication.type[0]}</li>
                        <li>${MyPersonality.Commnunication.type[1]}</li>
                        <li>${MyPersonality.Commnunication.type[2]}</li>
                          </ul> </div>`


