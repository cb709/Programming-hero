function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then (data => displayPost(data))
}

function displayPost (posts) {
    const postContainer = document.getElementById('post-container');
    for( const post of posts) {
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');
        postCard.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <h3 class="post-user">User: ${post.userId}</h3>
            <p class="post-body">${post.body}</p>
        `
        postContainer.appendChild(postCard);
    }
}

loadPosts()