document.querySelectorAll('.gallery-item').forEach(item => {  
    item.addEventListener('click', event => {  
        const lightbox = document.getElementById('lightbox');  
        const lightboxImg = document.getElementById('lightbox-img');  
        lightbox.style.display = "flex";  
        lightboxImg.src = event.target.src;  
    });  
});  

function closeLightbox() {  
    const lightbox = document.getElementById('lightbox');  
    lightbox.style.display = "none";  
}