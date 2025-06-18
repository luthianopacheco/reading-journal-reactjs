class BookModel {
    constructor({ id = null, title, author, genre, readAt }) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.readAt = readAt;
    }

    static fromJson(json) {
        return new BookModel({
            id: json.id,
            title: json.title,
            author: json.author,
            genre: json.genre,
            readAt: json.readAt,
        });
    }

    static toJson(book) {
        return {
            id: book.id,
            title: book.title,
            author: book.author,
            genre: book.genre,
            readAt: book.readAt,
        };
    }
}

export default BookModel;
