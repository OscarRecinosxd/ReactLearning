class Human{
    gender = "Male idk"
    

    printGender = () => {
        console.log(this.gender)
    }
}




class Person extends Human{
    name = "Oscar"
    gender = "Male"

    printMyName = () =>{
        console.log(this.name)
    }


}

const oscar = new Person();
oscar.printMyName()
oscar.printGender()