let totalAdoptionFees =0;
const dog1 = 'Name: Murphy, cost: 123, breed: lab';
const dog2 = 'Name: Poppy, cost: 123, breed: collie';
const dog3 = 'Name: Jack, cost: 123, breed: terrier';
const dog4 = 'Name: Duffy, cost: 123, breed: lab';
const dog5 = 'Name: Lucas, cost: 123, breed: collie';
const dog6 = 'Name: Jake, cost: 123, breed: terrier';
const dog7 = 'Name: Angus, cost: 123, breed: lab';
const dog8 = 'Name: Violet, cost: 123, breed: collie';
const dog9 = 'Name: Piper, cost: 123, breed: terrier';
const dog10 = 'Name: Poppy, cost: 123, breed: lab';
const dog11 = 'Name: Jake, cost: 123, breed: collie';
const dog12 = 'Name: Duffy, cost: 123, breed: terrier';

function adoptThisDog(adoptionFees) {
    totalAdoptionFees += adoptionFees;
    console.log(totalAdoptionFees); 
}

function showDogInfo(dog) {
    console.log(dog);
    alert(dog);
}

// ======ADD blog======================================================

document.getElementsByClassName('blog')[0].innerHTML = 'Blog1 Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat dolorem dicta beatae quasi, deleniti provident enim eius nobis cupiditate impedit, officia dolor minima? Enim nesciunt qui eius cumque ex.squaerat.';
document.getElementsByClassName('blog')[1].innerHTML = 'Blog2 Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat dolorem dicta beatae quasi, deleniti provident enim eius nobis cupiditate impedit, officia dolor minima? Enim nesciunt qui eius cumque ex.squaerat.';
document.getElementsByClassName('blog')[2].innerHTML = 'Blog3 Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat dolorem dicta beatae quasi, deleniti provident enim eius nobis cupiditate impedit, officia dolor minima? Enim nesciunt qui eius cumque ex.squaerat.';

// ======ADD blog-header======================================================

document.getElementsByClassName('blog-header')[0].innerHTML = 'Travelling with your dogs';
document.getElementsByClassName('blog-header')[1].innerHTML = 'How to Walk Multiple Dogs';
document.getElementsByClassName('blog-header')[2].innerHTML = 'Teach Your Dogs to Fetch!';

// ======ADD blog-picture======================================================

// document.getAttribute('src')[0].setAttribute('src', 'images/patrick-hendry-221863-unsplash.jpg');
// document.getAttribute('src')[1].setAttribute('src', 'images/matt-nelson-259365-unsplash.jpg');
// document.getAttribute('src')[2].setAttribute('src', 'images/wyatt-ryan-367017-unsplash.jpg');

// document.getAttribute('alt')[0].setAttribute('alt', 'me and dog in grand canyon');
// document.getAttribute('alt')[1].setAttribute('alt', 'walking multiple dogs');
// document.getAttribute('alt')[2].setAttribute('alt', 'teaching dog to fecth a ball');

let blog = document.querySelector('.blog-container');
let blogpicture = document.createElement('article');

console.log(blogpicture);

let image = document.createElement('img');
image.setAttribute('src','images/patrick-hendry-221863-unsplash.jpg');
image.setAttribute('src','images/matt-nelson-259365-unsplash.jpg');
image.setAttribute('src','images/wyatt-ryan-367017-unsplash.jpg');

image.setAttribute('alt', 'me and dog in grand canyon');
image.setAttribute('alt', 'me and dog in grand canyon');
image.setAttribute('alt', 'me and dog in grand canyon');

console.log(image);

blogpicture.appendChild(image);

console.log(blogpicture);

blog.appendChild(blogpicture);

// form.addEventListener('submit', function(e) {
// e.preventDefault();
// console.log('form submitted');
// })
