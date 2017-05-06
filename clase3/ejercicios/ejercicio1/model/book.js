const api = require('./api');

exports.getAll = () => api.fetchBooks();

exports.getById = id => api.fetchBooks(books => books.find(book => book.id == id));

exports.getByCategoryId = id => api.fetchBooks().then(books => books.filter(book => book.categories.includes(id)));

exports.search = keyword => api.fetchBooks().then(books => {
    return books.filter(book => book.title.includes(keyword))
});