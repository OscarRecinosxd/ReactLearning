function transformToObjects(numberArray) {
    let array = numberArray.map( (val) => {
        return {val : val}
    })
    
    return array

}

let a = transformToObjects(1,2,3)

console.log(a);