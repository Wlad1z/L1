const ownerId = -149279263; // Замените на ID нужного сообщества
const count = 10; // Количество постов для загрузки
const accessToken = 'vk1.a.E_f5-8fXRW2ft_QLI4KldaDO5W1p1xAVIP-y5_PrycjTTzusDZ6FFBWijBTobJbidpnPD75AkZlLgD9ZztLFmtcM9xZfAs1uH03QR6e0N50SPSAQI8rbbWj_VHeSfsw-zrk2qyQeFhc3muhoR8A9M75Nx-jO9jvzAwP-RtY85ofEopEyUh4EKxLqT24d4SRa1xEYIC1C1A5k_jgSOqD9YA'; // Замените на ваш токен VK API
const v = '5.131'; // Версия VK API

async function getPosts() {
    try {
        const response = await fetch(`/proxy/vk-proxy.php?owner_id=${ownerId}&count=${count}&access_token=${accessToken}&v=${v}`);
        const data = await response.json();
        return data.response.items;
    } catch (error) {
        console.error('Ошибка при получении постов:', error);
        return [];
    }
}

async function displayPosts() {
    const posts = await getPosts();

    const postsContainer = document.getElementById('postsContainer');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h3>Post ID: ${post.id}</h3>
            <p>${post.text}</p>
            <hr>
        `;
        postsContainer.appendChild(postDiv);
    });
}

displayPosts();