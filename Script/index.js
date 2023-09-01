
let imageArr = [
    "https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif",
    "https://static1.lenskart.com/media/desktop/img/Jan23/helios-plp/web%20banner.gif",
    "https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif",
    "https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif",
    "https://static1.lenskart.com/media/desktop/img/Feb23/23feb/hooper-eye-web.jpg",
    "https://static1.lenskart.com/media/desktop/img/Feb23/23feb/jj-flash/HP-Web.gif",
    "https://static1.lenskart.com/media/desktop/img/Feb23/23feb/wedding%20edit/web-home.gif",
    "https://static1.lenskart.com/media/desktop/img/Dec22/new-collection/desktop.gif"
]

let previous = document.querySelector(".prev")
let next = document.querySelector(".next")
let image = document.querySelector(".slide > img")

let imageIndex = 0;

image.setAttribute("src", imageArr[imageIndex])
let slide = setInterval(() => { 
        imageIndex++;
        if(imageIndex === imageArr.length){
            imageIndex = 0;
        }
        image.setAttribute("src", imageArr[imageIndex])
}, 5000)


next.addEventListener("click", () => {
    imageIndex++;
    if(imageIndex === imageArr.length){
        imageIndex = 0;
    }
    image.setAttribute("src", imageArr[imageIndex])
})

previous.addEventListener("click", () => {
    imageIndex--;
    if(imageIndex === -1){
        imageIndex = imageArr.length-1;
    }
    image.setAttribute("src", imageArr[imageIndex])
})


//---------------------------------------------- search Function----------------------------------------------------

let input = document.querySelector(".input")

input.addEventListener("search", function(){
    let filterArr = product.brands.filter((el) => {
      let x = input.ariaValueMax;
      if(el.includes(x.toLowerCase()))
      return el
    })
    console.log(filterArr)
})