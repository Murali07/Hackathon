"use strict";


let element1 = document.createElement("div");
element1.className = "common";
element1.id = "id1";
// element1.innerHTML = "Welcome to Hackathon";
document.body.appendChild(element1);

let h3 = document.createElement("h3");
h3.id = "head";
h3.innerHTML = "Welcome to Hackathon";
document.getElementById("id1").appendChild(h3);

let element2 = document.createElement("div");
element2.id = "id2";
document.getElementById("id1").appendChild(element2);

let header = document.createElement("header");
header.id = "header1";
document.getElementById("id2").appendChild(header);

let ul = document.createElement("ul");
ul.id = "ul1";
document.getElementById("header1").appendChild(ul);

let li1 = document.createElement("li");
li1.id = "li1";
document.getElementById("ul1").appendChild(li1);

let li2 = document.createElement("li");
li2.id = "li2";
document.getElementById("ul1").appendChild(li2);

let li3 = document.createElement("li");
li3.id = "li3";
document.getElementById("ul1").appendChild(li3);

let home = document.createElement("a");
home.href = "#";
home.innerHTML = "Home";
document.getElementById("li1").appendChild(home);

let about = document.createElement("a");
about.href = "#";
about.innerHTML = "About";
document.getElementById("li2").appendChild(about);

let contact = document.createElement("a");
contact.href = "#";
contact.innerHTML = "Contact";
document.getElementById("li3").appendChild(contact);

let element3 = document.createElement("form");
element3.className = "Formclass";
element3.id = "id3";
document.getElementById("id2").appendChild(element3);

let search = document.createElement("input");
search.type = "text";
search.id = "id4";
search.placeholder = "Search..";
document.getElementById("id3").appendChild(search);

let btn1 = document.createElement("input");
btn1.type = "button";
btn1.value = "Search";
btn1.id = "id5";
document.getElementById("id3").appendChild(btn1);


let element4 = document.createElement("div");
element4.id = "myData";
document.body.appendChild(element4);


const url = "https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane";

async function fetchData(url){
    let response = await fetch(url);
    let data = response.json();
    return data;
}

fetchData(url)
    .then(function (data){
        appendData(data);
    })
    .catch(function (err){
        console.log(err);
    });

function appendData(data){
    let myDB = document.getElementById("myData");
    document.getElementById("id5").addEventListener("click", function () {
        let input = document.getElementById("id4").value;
        for(let i = 0; i < data.length; i++){
            if(data[i].name === input){
                let div = document.createElement("div");
                div.innerHTML = "Country: " + data[i].country[i].country_id + " " + "Probability: " + data[i].country[i].probability;
                myDB.appendChild(div);
            }
        }
    })
}

