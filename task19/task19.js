const ownerId = -31480508; // Замените на ID нужного сообщества
const accessToken = 'vk1.a.E_f5-8fXRW2ft_QLI4KldaDO5W1p1xAVIP-y5_PrycjTTzusDZ6FFBWijBTobJbidpnPD75AkZlLgD9ZztLFmtcM9xZfAs1uH03QR6e0N50SPSAQI8rbbWj_VHeSfsw-zrk2qyQeFhc3muhoR8A9M75Nx-jO9jvzAwP-RtY85ofEopEyUh4EKxLqT24d4SRa1xEYIC1C1A5k_jgSOqD9YA'; // Замените на ваш токен VK API
const v = '5.131'; // Версия VK API


function calculateAvailableStorage() {
    let cachedAvailableStorage = localStorage.getItem('cachedAvailableStorage');
    if (cachedAvailableStorage !== null) {
        return cachedAvailableStorage; // Используем значение из глобальной переменной, если оно уже установлено
    }
    // переменные для хранения данных
    let totalData; 
    let testData;

    try {
        testData = 'a'.repeat(1024 * 64); // 8KB
        totalData = testData;

        while (true) {
            localStorage.setItem('testData', totalData);
            totalData += testData; //записываем по MB в переменную пока catch не поймает ошибку
        }
    } catch (error) {
        //проверяем это ошибка переполнения хранилища
        if (error.name === 'QuotaExceededError') {
            //выводим размер хранилища
            let currentDataSize = (totalData.length - testData.length) / (1024 * 1024);
            currentDataSize = currentDataSize.toFixed(2);
            localStorage.clear();
            cachedAvailableStorage = currentDataSize;
            localStorage.setItem('cachedAvailableStorage', cachedAvailableStorage);
            return currentDataSize;
        } else {
            console.error('Error:', error);
        }
    }
}


// Теперь используем availableStorageMB для определения максимального количества кэшированных постов

let offset = localStorage.getItem('offset');
if (offset !== null) {
    offset = localStorage.getItem('offset'); // Используем значение из глобальной переменной, если оно уже установлено
} else {
    offset = 0;
}
const postsContainer = document.getElementById('postsContainer');
const MAX_CACHED_POSTS = calculateAvailableStorage()*10000; // Примерное количество кэшированных постов



function loadMorePosts() {
    const script = document.createElement('script');
    script.src = `https://api.vk.com/method/wall.get?owner_id=${ownerId}&access_token=${accessToken}&v=${v}&offset=${offset}&count=10&callback=handleNewPosts`;
    document.head.appendChild(script);
}

function handleNewPosts(data) {
    const cachedData = JSON.parse(localStorage.getItem('cachedData')) || [];
    data.response.items.forEach(post => {
        let cachedPost = {
            id: post.id,
            text: post.text,
            like: post.likes.count,
            photo: false
        };
        
        if (post.attachments && post.attachments.length > 0 && post.attachments[0].photo) {
            const length = post.attachments[0].photo.sizes.length -1;
            cachedPost.photo = post.attachments[0].photo.sizes[length].url;
        }

        cachedData.push(cachedPost);
    });
    offset = +offset + data.response.items.length;
    localStorage.setItem('offset', offset);

    // Удаляем старые записи, чтобы не превысить лимит кэшированных данных
    while (cachedData.length > MAX_CACHED_POSTS) {
        cachedData.shift(); // Удаляем самую старую запись
    }

    // Сохраняем данные в localStorage
    localStorage.setItem('cachedData', JSON.stringify(cachedData));

    calculateLocalStorageMemory();
    // Отображаем посты в виджете
    displayCachedPosts(cachedData);
}

function displayCachedPosts(cachedData) {
    postsContainer.innerHTML = ''; // Очищаем контейнер

    cachedData.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h3>Post ID: ${post.id}</h3>
            <p>${post.text}</p>
            ${post.photo ? `<div class="img"><img src="${post.photo}" alt=""></div>` : " "}
            <p><img class="like" src="like-purpur.svg" alt="">${post.like}</p>
            <hr>
        `;
        postsContainer.appendChild(postDiv);
    });
}

function checkScroll() {
    const containerHeight = postsContainer.clientHeight;
    const contentHeight = postsContainer.scrollHeight;
    const scrollPosition = postsContainer.scrollTop;

    if ((containerHeight + scrollPosition+10) >= contentHeight) {
        loadMorePosts();
    }
}

// Следим за прокруткой виджета и вызываем функцию проверки
postsContainer.addEventListener('scroll', checkScroll);

// При загрузке страницы, отображаем кэшированные посты
window.addEventListener('load', () => {
    const cachedData = JSON.parse(localStorage.getItem('cachedData')) || [];

    if (cachedData.length === 0) {
        // Если в localStorage нет данных, загружаем первую порцию постов
        loadMorePosts();
    } else {
        displayCachedPosts(cachedData);
    }

    calculateLocalStorageMemory();
});