function loadImage(url) {
    return new Promise((resolve, reject) => {
        //создаём имитацию HTML img для отслеживания загрузки и отлова ошибки
        const image = new Image();

        image.onload = () => {//условия при загрузке изображения то есть resolve
            const imageInfo = {
                width: image.width,
                height: image.height,
                url: url
            };
            resolve(imageInfo);
        };
            
        image.onerror = () => {//условия при ошибке загрузки изображения то есть reject
            reject(new Error(`Не удалось загрузить изображение: ${url}`));
        };

        image.src = url;
    });
}

const imageUrl = 'https://mediaex.ru/wp-content/uploads/4/5/1/45119f284e141c703d755f5ba370a685.jpeg';
//обрабатываем загрузку изображения
loadImage(imageUrl)
    .then(imageInfo => {
        createSimpleElement('', ('Изображение загружено:'+ JSON.stringify(imageInfo))+`<img src="${imageInfo.url}" alt="">`);
    })
    .catch(error => {
        createSimpleElement('', ('Ошибка:'+ error));
    });