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

// USING ARRAY

const blogPosts = [
    {
        image: 'images/patrick-hendry-221863-unsplash.jpg',
        alt: 'beagles begging for food',
        headline: 'Travelling with your dogs',
        blogText: 'Blog1 Blog1 Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog'
    },
    {
        image: 'images/matt-nelson-259365-unsplash.jpg',
        alt: 'beagles begging for food',
        headline: 'How to Walk Multiple Dogs',
        blogText: 'Blog2 Blog1 Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog,'
    },
    {
        image: 'images/wyatt-ryan-367017-unsplash.jpg',
        alt: 'beagles begging for food',
        headline: 'Teach Your Dogs to Fetch!',
        blogText: 'Blog3 Blog1 Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog Blog'
    }
]

const blogPostContainer = document.querySelector('.blog-container');

console.log('blog-container');

for(let i = 0; i < blogPosts.length; i++) {
    let image = document.createElement('img');
    let blogPost = document.createElement('article');

    image.setAttribute('src',blogPosts[i].image);
    blogPostContainer.appendChild(image);
    blogPost.innerHTML = '<h1 class="headline">' + blogPosts[i].headline + '</h1>' + '<p>' + blogPosts[i].blogText +'</p>';
    blogPostContainer.appendChild(blogPost);

    // console.log(image);

}


// // BORDER COLOR ON HOVER

// $('#photo1').hover(function(e) {
//     console.log('e');
//     $('#photo1').addClass('yellow-border')
// })

// $('#photo2').hover(function(e) {
//     console.log('e');
//     $('#photo2').addClass('pink-border')
// })

// $('#photo3').hover(function(e) {
//     console.log('e');
//     $('#photo3').addClass('red-border')
// })

// $('#photo4').hover(function(e) {
//     console.log('e');
//     $('#photo4').addClass('yellow-border')
// })

// $('#photo5').hover(function(e) {
//     console.log('e');
//     $('#photo5').addClass('pink-border')
// })

// $('#photo6').hover(function(e) {
//     console.log('e');
//     $('#photo6').addClass('red-border')
// })
