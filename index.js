function createPostElement(post) {
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  const titleElement = document.createElement("h2");
  titleElement.textContent = post.title;

  const bodyElement = document.createElement("p");
  bodyElement.textContent = post.body;

  postDiv.appendChild(titleElement);
  postDiv.appendChild(bodyElement);

  return postDiv;
}

// Функция для добавления разметки в контейнер
function addPosts(posts) {
  const container = document.getElementById("postsContainer");
  posts.forEach((post) => {
    const postElement = createPostElement(post);
    container.appendChild(postElement); // Добавляем элемент в контейнер
  });
}

// Функция для получения постов с сервера
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    addPosts(posts); // Добавляем посты на страницу
  } catch (error) {
    console.error("Ошибка при получении постов:", error);
  }
}

// Вызов функции для получения постов
fetchPosts();
