//class
class BMI{

    //constructor 
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    //method
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}

let myBMI = new BMI(2, 100);
//output 
console.log(myBMI.calculateBMI());