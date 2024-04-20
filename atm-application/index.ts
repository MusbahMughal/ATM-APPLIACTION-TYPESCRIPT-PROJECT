import inquirer from 'inquirer';

async function main() {
    let myBalance = 10000;
    let myPin = 2244;

    let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }]);

    if (pinAnswer.pin === myPin) {
        console.log("Correct pin code");

        let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["withdraw", "check balance"] // lowercase 'choices'
        }]);

        console.log(operationAns);

        if (operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Enter the amount",
                type: "number"
            }]);
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
        } else if (operationAns.operation === "check balance") {
            console.log("Your balance is: " + myBalance);
        }
    } else {
        console.log("Incorrect pin code");
    }
}

main();




// import inquirer from 'inquirer';

// let myBalance = 10000; 
// let myPin   = 2244; 

// let pinAnswer = await inquirer.prompt([{
//    name:"pin",
//    message:"enter your pin",
//    type:"number"
// }])


// if ( pinAnswer.pin === myPin){
//  console.log( "correct pin code");

//  let operationAns =await inquirer.prompt([{
//    name:"operation",
//    message:"please select option",
//    type:"list",
//    Choices:["withdraw", "check balance "]
//  }])
 
//  console.log(operationAns); 
   
// if(operationAns.operation === "withdraw "){
//    let amountAns = await inquirer.prompt([{
//       name:"amount",
//       message:"enter your amount",
//       type:"number"
//    }]);

// myBalance -= amountAns.amount;
// console.log("Your reamining balance is :" + myBalance)
   
// }else if (operationAns.operation === "check balance"){
//    console.log (" Your balance is :" + myBalance)
// }



// }else {
//    console.log("Incorrect code pin");
   
// }










