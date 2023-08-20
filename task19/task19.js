const ownerId = -149279263; // Замените на ID нужного сообщества
const accessToken = 'vk1.a.E_f5-8fXRW2ft_QLI4KldaDO5W1p1xAVIP-y5_PrycjTTzusDZ6FFBWijBTobJbidpnPD75AkZlLgD9ZztLFmtcM9xZfAs1uH03QR6e0N50SPSAQI8rbbWj_VHeSfsw-zrk2qyQeFhc3muhoR8A9M75Nx-jO9jvzAwP-RtY85ofEopEyUh4EKxLqT24d4SRa1xEYIC1C1A5k_jgSOqD9YA'; // Замените на ваш токен VK API
const v = '5.131'; // Версия VK API

let offset = 0;
const postsContainer = document.getElementById('postsContainer');
const MAX_CACHED_POSTS = 10;

function loadMorePosts() {
    const script = document.createElement('script');
    script.src = `https://api.vk.com/method/wall.get?owner_id=${ownerId}&access_token=${accessToken}&v=${v}&offset=${offset}&count=10&callback=handleNewPosts`;
    document.head.appendChild(script);
}

function handleNewPosts(data) {
    const cachedData = JSON.parse(localStorage.getItem('cachedData')) || [];
    
    data.response.items.forEach(post => {
        cachedData.push({
            id: post.id,
            text: post.text
        });

        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h3>Post ID: ${post.id}</h3>
            <p>${post.text}</p>
            <hr>
        `;
        postsContainer.appendChild(postDiv);
    });

    offset += data.response.items.length;

    // После обработки всех новых постов, ограничиваем количество кэшированных данных и сохраняем в localStorage
    if (cachedData.length > MAX_CACHED_POSTS) {
        cachedData.splice(0, cachedData.length - MAX_CACHED_POSTS);
    }
    localStorage.setItem('cachedData', JSON.stringify(cachedData));
}

function checkScroll() {
    const containerHeight = postsContainer.clientHeight;
    const contentHeight = postsContainer.scrollHeight;
    const scrollPosition = postsContainer.scrollTop;

    if (containerHeight + scrollPosition >= contentHeight) {
        loadMorePosts();
    }
}

// Следим за прокруткой виджета и вызываем функцию проверки
postsContainer.addEventListener('scroll', checkScroll);

// При загрузке страницы, отображаем кэшированные посты
window.addEventListener('load', () => {
    const cachedData = JSON.parse(localStorage.getItem('cachedData')) || [];
    cachedData.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h3>Post ID: ${post.id}</h3>
            <p>${post.text}</p>
            <hr>
        `;
        postsContainer.appendChild(postDiv);
    });

    // Загрузка первой порции постов
    loadMorePosts();
});