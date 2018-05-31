



let monthlyIncome = prompt("Ваш бюджет на месяц?");
let name = prompt("Название вашего магазина?");

for (let i = 0; i < 3; i++){
	let a = prompt('Какой тип товаров будем продавать?');
	
	if((typeof(a)) === "string"  &&  (typeof(a)) === null && a != '' && a.length < 50) {
		console.log('все верно!');
		mainList.shopGoods[i] = a;
	} else {

	}
}






/*let i = 0;

while (i < 3) {
	let a = prompt('Какой тип товаров будем продавать?');
	mainList.shopGoods[i] = a;
	i++;
	console.log(a)
};

do {
	let a = prompt('Какой тип товаров будем продавать?');
	mainList.shopGoods[i] = a;
	i++;
	console.log(a)
}   while (i < 3);*/





let mainList = {
	budget: monthlyIncome,
	name: name,
	shopGoods: [],
	employers: {},
	open: true
};


 


alert(monthlyIncome/30);

/*let time = 19;
if (time < 0) {
	console.log('токаого не может быть ')
} else if(time > 8 && time < 20) {
	console.log('время работать!')
}  else if (time < 24) {
	console.log('уже слишком поздно!');
} else {
	console.log('в сутках только 24 часа)');
}
*/