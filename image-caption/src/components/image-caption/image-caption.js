class ImageCaption {
    render(text) {
        const p = document.createElement('p');
        p.innerHTML = text;
        const body = document.querySelector('body');
        body.appendChild(p);
    }
}

export default ImageCaption;