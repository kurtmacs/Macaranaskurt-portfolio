function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".responsive-icon");
    menu.classList.toggle("open"); 
    icon.classList.toggle("open");

}
// Project Data: Images and descriptions
const projects = [
    {
        images: [
            './assets/project-1.png',
            './assets/About Us.png',
            './assets/Careers.png',
            './assets/Contact Us.png',
        ],
        description: '" UI Design for our Website "'
    },
    {
        images: [
            './assets/project-2.png',
            './assets/kit1.jpg',
            './assets/kit2.jpg',
        ],
        description: '" These are the vendo machines and <br> vendo kit that I recently created"'
    },
    {
        images: [
            './assets/project-3.png'
        ],
        description: 'The Inventory Management System'
    }
];



// Open modal and display selected project
let currentImageIndex = 0;
let currentProjectImages = [];

function openModal(index) {
    const modal = document.getElementById('projectModal');
    const fullImage = document.getElementById('fullImage');
    const description = document.getElementById('modalDescription');

    // Set project images and reset index
    currentProjectImages = projects[index].images;
    currentImageIndex = 0;

    // Set initial image and description
    fullImage.src = currentProjectImages[currentImageIndex];
    description.innerHTML = projects[index].description;

    // Show the modal
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = "none";
}

function showNextImage() {
    if (currentProjectImages.length > 1) {
        currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
        document.getElementById('fullImage').src = currentProjectImages[currentImageIndex];
    }
}

function showPreviousImage() {
    if (currentProjectImages.length > 1) {
        currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
        document.getElementById('fullImage').src = currentProjectImages[currentImageIndex];
    }
}
