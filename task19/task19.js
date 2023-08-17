const ownerId = -1; // Замените на ID нужного сообщества
const count = 10; // Количество постов для загрузки
const accessToken = 'vk1.a.E_f5-8fXRW2ft_QLI4KldaDO5W1p1xAVIP-y5_PrycjTTzusDZ6FFBWijBTobJbidpnPD75AkZlLgD9ZztLFmtcM9xZfAs1uH03QR6e0N50SPSAQI8rbbWj_VHeSfsw-zrk2qyQeFhc3muhoR8A9M75Nx-jO9jvzAwP-RtY85ofEopEyUh4EKxLqT24d4SRa1xEYIC1C1A5k_jgSOqD9YA'; // Замените на ваш токен VK API
const v = '5.131'; // Версия VK API

async function getPostsFromVK(owner_id, count, access_token, v) {
    try {
        const url = `https://api.vk.com/method/wall.get?owner_id=${owner_id}&count=${count}&access_token=${access_token}&v=${v}`;
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            // Обработайте полученные данные
            console.log('Data:', data);
        } else {
            console.error('Response error:', response);
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// Замените YOUR_ACCESS_TOKEN на ваш реальный access token VK API
getPostsFromVK(ownerId, count, accessToken, v);