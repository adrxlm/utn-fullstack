const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Book {
        id: ID,
        title: String,
        author: String,
        image: String
    }

    type Query {
        book: Book,
        books: [Book]
    }
`);

// CONSULTA DEL CLIENTE
// GET: www.api.com/graphql/{book{id,title}}
const query = `{
    book {
        id,
        title
    }
    books {
        id,
        title,
        author
    }
}`;

const booksData = [{
    "id": "1",
    "title": "The Hobbit",
    "author": "J.R.R Tolkien",
    "image": "https://images-na.ssl-images-amazon.com/images/I/519V0IlKZpL._AC_US436_QL65_.jpg",
    "categories": [
      "c8f5d5c9-b750-4ee2-a209-e0d4710c1976"
    ]
  },
  {
    "id": "2",
    "title": "I, Robot",
    "author": "Isaac Asimov",
    "image": "https://images-na.ssl-images-amazon.com/images/I/51+uc9PwVOL._AC_US436_QL65_.jpg",
    "categories": [
      "5",
      "7"
    ]
  }];

const root = {
    book: () => booksData[0],
    books: () => booksData
};

graphql(schema, query, root).then(result => {
    console.log(JSON.stringify(result));
});