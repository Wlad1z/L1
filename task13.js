//обявляем класс
class Shape {
    constructor() {
        
    }
    //метод для площади
    calculateArea() {
        
    }
    //метод для периметра
    calculatePerimeter() {
        
    }
}
//обявляем подклассы
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.ceil(Math.PI * this.radius ** 2);
    }

    calculatePerimeter() {
        return Math.ceil(2 * Math.PI * this.radius);
    }
}

class Triangle extends Shape {
    constructor(a, b, c, heightC) {
        super();
        this.heightC = heightC;//высота проведена к стороне c
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calculateArea() {
        return this.heightC * this.c / 2;
    }

    calculatePerimeter() {
        return this.a + this.b + this.c;
    }
}

const triangle = new Triangle(3, 4, 5, 2.4);
const circle = new Circle(5);

// Вызываем методы для расчета площади и периметра
let area = triangle.calculateArea();
let perimeter = triangle.calculatePerimeter();
createSimpleElement('Задание 13', ("Площадь треугольника: " + area));
createSimpleElement('', ("Периметр треугольника: " + perimeter))

area = circle.calculateArea();
perimeter = circle.calculatePerimeter(); 
createSimpleElement('', ("Площадь круга: " + area));
createSimpleElement('', ("Периметр круга: " + perimeter));


// console.log("Площадь треугольника:", area);
// console.log("Периметр треугольника:", perimeter);