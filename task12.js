const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    getTitle: function() {//получить название
        return this.title;
    },

    setTitle: function(newTitle) {//изменить название
        this.title = newTitle;
    },

    getAuthor: function() {//получить автора
        return this.author;
    },

    setAuthor: function(newAuthor) {//изменить автора
        this.author = newAuthor;
    },

    getYear: function() {//получить год
        return this.year;
    },

    setYear: function(newYear) {//изменить год
        this.year = newYear;
    }
};

createSimpleElement('Задание 12', ("Оригинальное название: " + book.getTitle()))
book.setTitle("Великий Гетсби");
createSimpleElement('', ("Русское название: " + book.getTitle()))
