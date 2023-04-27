const numbers = [0,1,2,3]

const newNumbers = [...numbers,4,5]


const filter = (...args) => {
    return args.filter( el => el ===1)
}



console.log(filter(1,1,1,0,5,2));