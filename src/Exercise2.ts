interface Bank{
    money:number;
    deposit(value:number):void;
    
}
interface mySelf{
    name:string;
    bankAccount:Bank;
    hobbies:[string,string];
}

let bankAccount: Bank={ 
	money: 2000, 
	deposit(value) { 
		this.money += value; 
	} 
}; 
let myself:mySelf = { 
	name: "John", 
	bankAccount:bankAccount, 
	hobbies: ["Violin", "Cooking"] 
}; 

myself.bankAccount.deposit(3000); 
console.log(myself);