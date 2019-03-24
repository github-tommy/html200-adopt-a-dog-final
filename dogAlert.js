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

let blog = document.querySelector('.blog-container');
let blogPost = document.createElement('article');

console.log(blogPost);

let image = document.createElement('img');
image.setAttribute('src','images/patrick-hendry-221863-unsplash.jpg');
image.setAttribute('src','images/matt-nelson-259365-unsplash.jpg');
image.setAttribute('src','images/wyatt-ryan-367017-unsplash.jpg');

image.setAttribute('alt', 'me and dog in grand canyon');
image.setAttribute('alt', 'me and dog in grand canyon');
image.setAttribute('alt', 'me and dog in grand canyon');

// console.log(image);

blogPost.appendChild(image);

// console.log(blogPost);

blog.appendChild(blogPost);

// BORDER COLOR ON HOVER

$('#photo1').hover(function(e) {
    console.log('e');
    $('#photo1').addClass('yellow-border')
})

$('#photo2').hover(function(e) {
    console.log('e');
    $('#photo2').addClass('pink-border')
})

$('#photo3').hover(function(e) {
    console.log('e');
    $('#photo3').addClass('red-border')
})

$('#photo4').hover(function(e) {
    console.log('e');
    $('#photo4').addClass('yellow-border')
})

$('#photo5').hover(function(e) {
    console.log('e');
    $('#photo5').addClass('pink-border')
})

$('#photo6').hover(function(e) {
    console.log('e');
    $('#photo6').addClass('red-border')
})
