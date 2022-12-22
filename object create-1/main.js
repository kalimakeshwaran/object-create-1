

let len=parseInt(prompt("enter the length"))
let obj={}
for(i=1;i<len;i++){
    let a=prompt("enter the name")
    let b=prompt("enter the age")
    let c=prompt("enter the regi num")
        obj[i]={name:a,age:b,reginum:c}
}
console.log(obj)