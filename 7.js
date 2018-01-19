// Task 1

var resort = prompt('Введите число от 1 до 3', '1 - taba, 2 - sharm, 3 - hurgada');
var out1 = document.getElementById('out1');

if (resort >= 1 && resort <=3) {
    if (resort == 1) {
	    out1.innerHTML = 'Вы выбрали курорт - taba' ;
    }    
    else if (resort == 2) {
	    out1.innerHTML = 'Вы выбрали курорт - sharm' ;
    }
    else if (resort == 3) {
	    out1.innerHTML = 'Вы выбрали курорт - hurgada' ;
    }
}

else alert('Нет такого курорта, далее мы предложим доступные варианты') 

// Task 2

var people = prompt('Введите число учасников группы', '');
var out2 = document.getElementById('out2');

var tabaFree = 6;
var sharmFree = 15;
var hurgadaFree = 25;

	if (people == Math.abs(people) && people == Math.round(people))
	 {
		if (people<=25) {
			var hurgadaPeople = confirm('Согласны ли Вы быть в группе Hurgada?');
			if (hurgadaPeople == true) {
				out2.innerHTML = `Ваша группа Hurgada - ${25-people} мест осталось`;
			}
			else if (people<=15) {
				var shurmPeople = confirm('Согласны ли Вы быть в группе Sharm?');
				if (shurmPeople == true) {
					out2.innerHTML = `Ваша группа Shurm - ${15-people} мест осталось`;
				}
				else if (people<=6) {
					var tabaPeople = confirm('Согласны ли Вы быть в группе Taba?');
					if (tabaPeople == true) {
						out2.innerHTML = `Ваша группа Taba - ${6-people} мест осталось`;
					}
					else {
						alert('Мест  нет!');
					}
				}
				else {
					alert('Мест  нет!');
				}
			}
			else {
				alert('Мест  нет!');
			}
		}
		else {
			alert('Мест нет!');
		}
	}
	else alert('Вы никуда не поедете!')
