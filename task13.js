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
        return Math.PI * this.radius ** 2;
    }

    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
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

// Вызываем методы для расчета площади и периметра
const area = triangle.calculateArea();
const perimeter = triangle.calculatePerimeter();

// console.log("Площадь треугольника:", area);
// console.log("Периметр треугольника:", perimeter);