let btn = document.getElementById("btn");
let imgContainer = document.getElementById("img-container");
let img = document.getElementById("img")

btn.addEventListener("click",getImage)

// function getImage(){
//     fetch("https://api.thecatapi.com/v1/images/search?limit=1")
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(data){
//        return data.forEach(function(cat){
//          img.src = cat.url
//         })
//     })
// }


// another function using axios
// to use axios install it by npm or 
// add script tag <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> in html


function getImage(){

    axios.get("https://api.thecatapi.com/v1/images/search?limit=1")

    .then(function(res){
        if (res.status == 200){

            return res.data.forEach(function(cat){
                img.src =cat.url
            })
        }

    })
}