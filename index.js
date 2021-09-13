// getting a RANDOM WHOLE NUMBER between 1-6
let randomNum1=Math.floor(Math.random()*6)+1
console.log(randomNum1)

//            "dice"+1+".png"
// if randomNumber1=1 => dice1.png
// if randomNumber1=2 => dice2.png
// if randomNumber1=3 => dice3.png

let randomDiceName1="dice"+randomNum1+".png"


//images/dice1.png
let randomDicePath1="images/"+randomDiceName1
console.log(randomDicePath1)


//Getting the first image:
let image1=document.querySelectorAll("img")[0]
console.log(image1)

// image1.setAttribute("attribute name","attribute value")
image1.setAttribute("src",randomDicePath1)

// TRY RENDERING SECOND DICE RANDOMLY. CURRENTLY IT IS STABLE
let randomNumber2=Math.floor(Math.random()*6)+1
console.log(randomNumber2)

//getting the random name based on the random number
let randomDiceName2="dice"+randomNumber2+".png"

//path of the second dice: images/dice4.png . images/dice2.png
let randomDicePath2="images/"+randomDiceName2

//getting the second image
// document.getElementsByClassName(“img2”);
//document.getElementsByTagName(“img”)[1];
//document.querySelector(“.img2”);
//document.querySelectorAll(“img”)[1];
let image2=document.querySelectorAll("img")[1]

image2.setAttribute("src",randomDicePath2)//src ="randomDicePath2"

//
if (randomNum1>randomNumber2){
    // console.log("Player 1 wins !")
    var heading = document.querySelector("h1")
    heading.innerText="😂 Player 1 wins ! 😂"

    var heading2 = document.querySelector("#parag")
    heading2.innerText="👏 Player 1 wins ! 👏"
}else if(randomNumber2>randomNum1){
    // console.log("Player 2 wins !")
    document.querySelector("h1").innerText="😂 Player 2 wins ! 😂"

    var heading2 = document.querySelector("#parag")
    heading2.innerText="👏 Player 2 wins ! 👏"
}else{
    // console.log("TIE- nobody wins !")
    document.querySelector("h1").innerText="🤷 TIE- nobody wins ! 🤷"

    var heading2 = document.querySelector("#parag")
    heading2.innerText="TIE- nobody wins !"
}

//Displayinng the winner in the heading

