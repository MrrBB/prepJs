let week = ["понедельник", 'вторник', 'среда', '<i>четверг</i>', 'пятница', '<b>суббота</b>', '<b>воскресенье</b>'];
   	document.getElementById('week-days').innerHTML = week.join ('<br>');	



let arr = ['32334', '74460', '61009',  '41824', '16076', '31557', '45774'];

let result = '';

for (let n = 0; n < 7; n++){

	num = arr[n]
	if (num.startsWith('7')) {
		result = num;
	};
	if (num.startsWith('3')) {
		result = num;
	};
	console.log(result);
};




/*function todayDay(date) {
    dateToday = date || new Date();
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = dateToday.getDay();
    return days[day];
}*/

// let date = new Date();
// alert(todayDay(date));
