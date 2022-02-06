const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// unsplash Api

const count = 10;
const apiKey = 'nEDRvkdKSpPXH6-v6oPduvlvQbKaoi98U9UTh6Q5mJM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


//Helper function to Set attributes on DOm elements
function attributSetter(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayPhotos() {
    photosArray.forEach((photo) => {
        //    create an anchor to link to unsplash
        const item = document.createElement('a')
        attributSetter(item, {
            href: photo.links.html,
            target: '_blank',
        });

        // create <img> for photo
        const img = document.createElement('img');
        attributSetter(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            target: photo.alt_description,
        });

        //put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}

async function getPhotos() {

    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();


    } catch (e) {

    }

}

// on load

getPhotos();