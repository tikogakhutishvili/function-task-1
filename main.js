function clock(h,m){
    if(h>=23 || m>=60){
        return "clock does not working"
    } else {
        return `it's ${h}:${m}AM`
    }
}
console.log(clock(25,50))


function pishkebi(p,m){
    if(p>m){
        return "no money, no honey"
    } else {
        return `you can have ${(m-m%p)/p} pishka and change will be ${m%p}`
    }
}
console.log(pishkebi(2,15))
function factorial(num) {
        if(num === 0 || num === 1){
            return `factorial is ${num}`
        } else {
            for( let i=num; i > 1; i--){
                num*=(i-1)
            }
            return `factorial is ${num}`
    }
}
console.log(factorial(5))

function String(str) {
    if(str.includes("a")) {
        return str.replace('a','A')
    } else {
        return str
    }
}
console.log(String("tiktaki"))

