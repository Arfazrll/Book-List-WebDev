# 📚 Book List WebDev

**Daftar Buku** is a web-based application built with **ReactJS** that allows users to view a list of books. The app fetches book data from an **external API** and presents it to the user in an interactive and responsive interface.

---

## ✨ Key Features

- **📋 Display Book List**  
  Displays a list of books with detailed information fetched from an external API.

- **🔗 External API Integration**  
  The app fetches book data from the following API:  
  [PotterAPI Books](https://potterapi-fedeperin.vercel.app/en/books).

- **🎨 User-Friendly Interface**  
  A simple and intuitive design for easy navigation.

- **🔍 Book Search**  
  Search for books based on title, author, or genre with an intuitive search interface.

---

## 🛠️ Technologies Used

- **HTML**: For structuring the web pages.
- **CSS**: For styling and layout to provide a responsive user experience.
- **JavaScript**: For the application logic and interactivity.
- **ReactJS**: A JavaScript library for building dynamic UIs.
- **Postman**: Used to test the API and ensure the data is accessible.

---

## 🚀 How to Use

### 1. Clone the Repository

```bash
git clone https://github.com/Arfazrll/DaftarBuku.git
cd DaftarBuku
```

### 2. Install Dependencies

Install the required dependencies using **npm** or **yarn**:

```bash
npm install
```

### 3. Run the Application

To run the app locally:

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

---

## 🔌 API Endpoint

This application relies on an **external API** to manage the book data. You can test the following endpoint using **Postman**:

### **GET** `/en/books`
- **Description**: Fetches all available book data.
- **Example Response**:
  ```json
  [
    {
      "id": "1",
      "name": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "genre": "Fantasy",
      "publishedYear": "1997"
    },
    {
      "id": "2",
      "name": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "publishedYear": "1937"
    },
  ]
  ```

---

## 📊 Interface Overview

This app allows users to:
- View a list of books loaded from the API.
- Search for books based on title, author, or genre.
- Access detailed information about each book dynamically.

---

## 📝 Conclusion

**Daftar Buku** provides a simple and efficient way for users to view and search for books using data fetched from an **external API**. With a user-friendly interface built with **ReactJS**, this application offers an enjoyable and easy-to-use experience.

---

