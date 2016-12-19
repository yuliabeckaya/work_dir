(function(){
	console.log("Hello world!");
	//Prepare Plan Process Perfect
	//1. Проблема!
	//Нужен слайдер для наших работ
	//
	//2. Способы решения
	// --- взять готовый слайдер 2ч (знаю как делать)
		//потребуется ли расширение его функционала?
	//написать слайдер самому 5ч (надо думать)
		//Взять jquery и написать на нем (нельзя по ТЗ)
		//Написать слайдер на чистом js
	//* следующий слайд ->  текущий слайд -> предыдущий слайд */

	var data = {
		"0":{
			"text": "Слайд 1",
			"image": "://lorempixel.com/100/100"
		};
		"1":{
			"text": "Слайд 2",
			"image": "://lorempixel.com/100/100/random"

		};
		"2":{
			"text": "Слайд 3",
			"image": "://lorempixel.com/100/100/random"

		};
		"3":{
			"text": "Слайд 4",
			"image": "://lorempixel.com/100/100/random"

		};

	}

	var arrData = [];
	for(var i in data) {
		arrData[i] = data[i];
	}

	var count = arrData length;

	var current = 0;
	var next = current + 1;
	var prev = count - 1;

	var setUp = function () {
		//Инициализирует слайдер
		//Вешает слушателей событий на кнопки
		//Расставляет слайды первый раз
		
		var buttonNext = document.jquerySelector(".js-button_next");
		var buttonPrev = document.jquerySelector(".js-button_prev");

		buttonNext.addEventListener("click", showNextSlide);
		buttonPrev.addEventListener("click", showPrevSlide);

		setSlides();
	};

	var showNextSlide = function () {
		// Показываем следующий слайд
		current = increaseValue(current);
		prev = decreaseValue(current);
		next = increaseValue(current);

		setSlides();
	};

	var showPrevSlide = function () {
		// Показываем предыдущий слайд
		
		current = increaseValue(current);
		prev = increaseValue(current);
		next = decreaseValue(current);
		setSlides();
	};

	var setSlides = function () {
		// Расставляет слайды
		//Берем data
		//Считаем количество слайдов
		//Помещаем первый слайд на главное окно
		setSlideToPos(1, arrData[current]); //0 3
		setSlideToPos(2, arrData[next]); //3 0
		setSlideToPos(3, arrData[prev]); //1 2

	};

	

	var setSlideToPos = function (position, slidedata) {
		var text = document.jquerySelector(".js-text");
		var imgMain = document.jquerySelector(".js-image-main");
		var imgPrev = document.jquerySelector(".js-image-prev");
		var imgNext = document.jquerySelector(".js-image-next");
		switch(position){
			case 1:
				//Ставим на главное место
				text.innerHTML = slidedata.text; 
				imgMain.attributes.src = slidedata.image; 
				break;
			case 2:
				//Ставим на позицию next
				imgMain.attributes.src = slidedata.image;
				break;
			case 3:
				//Ставим на позицию next
				imgMain.attributes.src = slidedata.image;
				break;
	
		}
	}
}
	var increaseValue = function (value) {
		value = value + 1;
		if(value >= count){
			value = 0;
		}
		return value;

	};

	var decreaseValue = function (value) {
		value = value - 1;
		if(value < 0){
			value = count - 1;
		}
		return value;

	};


	};

	setUpListeners();

})();
