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
