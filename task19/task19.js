const ownerId = -149279263; // Замените на ID нужного сообщества
const count = 10; // Количество постов для загрузки
const accessToken = 'vk1.a.E_f5-8fXRW2ft_QLI4KldaDO5W1p1xAVIP-y5_PrycjTTzusDZ6FFBWijBTobJbidpnPD75AkZlLgD9ZztLFmtcM9xZfAs1uH03QR6e0N50SPSAQI8rbbWj_VHeSfsw-zrk2qyQeFhc3muhoR8A9M75Nx-jO9jvzAwP-RtY85ofEopEyUh4EKxLqT24d4SRa1xEYIC1C1A5k_jgSOqD9YA'; // Замените на ваш токен VK API
const v = '5.131'; // Версия VK API

function callbackFunc(data) {
    const postsContainer = document.getElementById('postsContainer');
    data.response.items.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h3>Post ID: ${post.id}</h3>
            <p>${post.text}</p>
            <hr>
        `;
        postsContainer.appendChild(postDiv);
    });
}

const script = document.createElement('script');
script.src = `https://api.vk.com/method/wall.get?owner_id=-149279263&count=10&access_token=vk1.a.E_f5-8fXRW2ft_QLI4KldaDO5W1p1xAVIP-y5_PrycjTTzusDZ6FFBWijBTobJbidpnPD75AkZlLgD9ZztLFmtcM9xZfAs1uH03QR6e0N50SPSAQI8rbbWj_VHeSfsw-zrk2qyQeFhc3muhoR8A9M75Nx-jO9jvzAwP-RtY85ofEopEyUh4EKxLqT24d4SRa1xEYIC1C1A5k_jgSOqD9YA&v=5.131&callback=callbackFunc`;
document.head.appendChild(script);