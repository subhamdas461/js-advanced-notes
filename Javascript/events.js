const main = document.querySelector(".event__container")
const form = document.querySelector("form")
const btn = document.querySelector("button")

const func = function(e){
    e.preventDefault()
     e.stopPropagation()
    // alert(e.target.tagName+"btn")
    console.log(this.tagName);
}


btn.addEventListener("click", func)
form.addEventListener("click",(e)=>{
    e.stopPropagation()
    e.preventDefault()
    // alert(e.target.tagName+"form")
     console.log(e, this, e.currentTarget);
})
main.addEventListener("click",(e)=>{
     e.stopPropagation()
    e.preventDefault()
    // alert(e.target.tagName+"main")
     console.log(e.target, this.target, e.currentTarget);
})