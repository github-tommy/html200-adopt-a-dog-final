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
        blogText: 'Blog1 Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'
    },
    {
        image: 'images/matt-nelson-259365-unsplash.jpg',
        alt: 'beagles begging for food',
        headline: 'How to Walk Multiple Dogs',
        blogText: 'Blog2 Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'
    },
    {
        image: 'images/wyatt-ryan-367017-unsplash.jpg',
        alt: 'beagles begging for food',
        headline: 'Teach Your Dogs to Fetch!',
        blogText: 'Blog3 Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'
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

$('.cart-total').text(totalAdoptionFees);
