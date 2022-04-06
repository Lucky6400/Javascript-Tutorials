class Heroes { // todo Create a class with any random name
    constructor(name, age) { // ! Must use this constructor keyword
        this.name = name;
        this.age = age;
        // name and age have become the two properties of this class
    }
    favColor() { // making a new function
        let color = "blue";
        return color;
    }
    ageOf() {
        return this.age;
    }
    nameOf(){
        return this.name;
    }
}
let myID = new Heroes("Lucky", 21);
console.log(`My name is ${myID.nameOf()}, my favourite color is ${myID.favColor()} and my age is ${myID.ageOf()} years.`);

//! Must use variable name while calling a function here. Like I used myID, you  can use your variable name.