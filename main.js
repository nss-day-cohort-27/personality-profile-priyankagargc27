
console.log("Hello main.js");

const Priyanka ={
generalProfile:{
    name:"Priyanka Garg",
    personalityType:"Commander",
    age:32,
    type1:"Agree",
    type2:"Disagree"
},

peopleLikeme:{
    name:["Anupam","name2","name3","name4"]

},

commnunication:{
    type:"effective"

}
}
const saveDatabase = function (databaseObject, localStorageKey) {
    const stringifiedDatabase = JSON.stringify(databaseObject)

    
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}
saveDatabase(Priyanka, "My Profile")
const loadDatabase = function (localStorageKey) {
    
    const databaseString = localStorage.getItem(localStorageKey)

    
    return JSON.parse(databaseString)
}
console.log(loadDatabase("My Profile"));


const paragraph=document.getElementById("wrapper")
paragraph.innerHTML=`<p> Hi, My name is ${Priyanka.generalProfile.name}, my personality type is ${Priyanka.generalProfile.personalityType} 
in 16personality.com </p>
<ul>
<li>You find it easy to stay relaxed even when there is some pressure. : <strong>${Priyanka.generalProfile.type1}
</strong> </li>
<li>Being organized is more important to you than being adaptable: <strong>${Priyanka.generalProfile.type1}</strong></li>
<li>You try to respond to your e-mails as soon as possible and cannot stand a messy inbox: <strong>${Priyanka.generalProfile.type1}</strong>
</ul></br>
<ul>
<li>People can rarely upset you: <strong> ${Priyanka.generalProfile.type2}</strong>
</li>
<li>Your travel plans are usually well thought out:<strong> ${Priyanka.generalProfile.type2}</strong>
</li>
<li>Being able to develop a plan and stick to it is the most important part of every project:
<strong> ${Priyanka.generalProfile.type2} </strong> </li>`


//const people = document.
const people = document.getElementById("people")
people.innerHTML=`<h3> There are four people in the list who share the same personality type like me <h3>
                  <ul>
                  </ul>`


