const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Book {
        id: ID,
        title: String,
        author: String,
        image: String
    }

    type Category {
        id: ID,
        label: String
    }

    type Query {
        book: Book,
        books: [Book],
        category: Category,
        categories: [Category]
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
    categories {
        id,
        label
    }
}`;

const categoriesData = [{
    "id": "1",
    "label": "Biographies & Memoirs"
  },
  {
    "id": "2",
    "label": "Business & Money"
  },
  {
    "id": "3",
    "label": "Children's eBooks"
  },
  {
    "id": "4",
    "label": "Comics & Graphic Novels"
  },
  {
    "id": "5",
    "label": "Literature & Fiction"
  },
  {
    "id": "6",
    "label": "Mystery, Thriller, & Suspense"
  },
  {
    "id": "7",
    "label": "Science Fiction & Fantasy"
  },
  {
    "id": "8",
    "label": "Programming Languages"
  },
  {
    "id": "c8f5d5c9-b750-4ee2-a209-e0d4710c1976",
    "label": "UTN Fullstack"
  }
];

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
    books: () => booksData,
    categories: () => categoriesData
};

graphql(schema, query, root).then(result => {
    console.log(JSON.stringify(result));
});