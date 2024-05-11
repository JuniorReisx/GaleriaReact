import { useEffect } from 'react';
import style from'./Galeria.module.css'

export function Galeria() {
    useEffect(() => {
        const images = document.querySelectorAll(`.${style.containergallery} img`);
        const modal = document.getElementById("modal");
        const modalImg = document.getElementById("imgmodal");
        const captionText = document.getElementById("caption");
        const closeModal = document.querySelector(`.${style.close}`);
        const modalBackdrop = document.querySelector(`.${style.modal}`);

        const openModal = (src, alt) => {
            modal.style.display = "block";
            modalImg.src = src;
            captionText.innerHTML = alt;
        };

        const closeModalHandler = () => {
            modal.style.display = "none";
        };

        images.forEach(img => {
            img.addEventListener('click', function() {
                openModal(this.src, this.alt);
            });
        });

        closeModal.onclick = closeModalHandler;
        modalBackdrop.onclick = closeModalHandler;

        return () => {
            images.forEach(img => {
                img.removeEventListener('click', openModal);
            });
            closeModal.onclick = null;
            modalBackdrop.onclick = null;
        };
    }, []); // Empty dependency array ensures useEffect runs only once

    const imageUrls = [
        "https://source.unsplash.com/random?a=1",
        "https://source.unsplash.com/random?a=2",
        "https://source.unsplash.com/random?a=3",
        "https://source.unsplash.com/random?a=4",
        "https://source.unsplash.com/random?a=5",
        "https://source.unsplash.com/random?a=6",
        "https://source.unsplash.com/random?a=7",
        "https://source.unsplash.com/random?a=8",
        "https://source.unsplash.com/random?a=9",
        "https://source.unsplash.com/random?a=10",
        "https://source.unsplash.com/random?a=11",
        "https://source.unsplash.com/random?a=12",
        "https://source.unsplash.com/random?a=13",
        "https://source.unsplash.com/random?a=14",
        "https://source.unsplash.com/random?a=15",
        "https://source.unsplash.com/random?a=16",
        "https://source.unsplash.com/random?a=17",
        "https://source.unsplash.com/random?a=18",
        "https://source.unsplash.com/random?a=19",
        "https://source.unsplash.com/random?a=20",

        // Add more image URLs here
    ];

    return (
        <main>
            <div className={style.containergallery}>
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} className={style.img} alt={`Imagem ${index + 1}`} />
                ))}
            </div>

            <div id="modal" className={style.modal}>
                <span className={style.close}>&times;</span>
                <img className={style.modalcontent} id="imgmodal" />
                <div id="caption"></div>
            
            </div>
        </main>
    );
}