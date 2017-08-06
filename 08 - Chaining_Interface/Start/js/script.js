console.clear();

// ## 0 Чейнинг
//
// Сделайте методы обьекта "рабочими".
// Результут: В файле index.html должен быть отрисован прямоугольник

var rectangle = document.querySelector('.rectangle'); // Выбор DOM елемента


var rectangleDraw = {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',

  // * Your Code Start *
    setWidth: function(w){
		this.width = w;
		return this;
	},
	setHeight: function (h) {
        this.height = h;
        return this;
    },
    setColor: function (bc) {
        this.backgroundColor = bc;
        return this;
    },
  // * Your Code End *

	draw: function(el) {
		el.style.width = `${this.width}px`;
		el.style.height = `${this.height}px`;
		el.style.backgroundColor = this.backgroundColor;
    	el.innerHTML = `${this.width}px x ${this.height}px`;
	}
}

rectangleDraw.setWidth(400).setHeight(250).setColor('#990').draw(rectangle) // Результат: Прямоугольник высотой 250px и шириной 400px темно-желтого цвета

// ## 1 Приватные и публичные методы и пременные
//
// Реализуйте код аналогичному примеру
// Создайте модуль circleDraw
// У этого модуля должны быть приватные и публичные методы
// Публичные: setRadius setColor draw
// Приватные на свое усмотрение
// (Пример подобного модуля мы разбирали на уроке где был canvas)

var circle = document.querySelector('.circle'); // Выбор DOM елемента

// * Your Code Start *

var circleDraw = {

    width: 0,
    height: 0,
    backgroundColor:'transparent',

    setRadius: function (r){
        this.height = r*2;
        this.width = r*2;
    },
    setColor:function (bc){
        this.backgroundColor = bc;
    },

    draw: function (el) {
        el.style.height = `${this.height}px`;
        el.style.width = `${this.width}px`;
        el.style.backgroundColor = this.backgroundColor;
        el.innerHTML = `${this.height}px`;
    }
}



// * Your Code End *

circleDraw.setRadius(110);
circleDraw.setColor('#f00');
circleDraw.draw(circle); // В блоке Drawing circle должен появится круг размером 220px, красного цвета

