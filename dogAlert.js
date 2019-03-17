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

// ======ADD blog-para======================================================

// const x = blog-para;

// for(let x = 0; x <blog-para.length; x++) {
//     console.log(blog-para);
// }

document.getElementsByClassName('blog-para')[0].innerHTML = 'Blog1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat.';
document.getElementsByClassName('blog-para')[1].innerHTML = 'Blog2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat.';
document.getElementsByClassName('blog-para')[2].innerHTML = 'Blog3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae illum minus, praesentium tempora expedita voluptatum qui cumque pariatur tempore dolores quos voluptatibus, ut mollitia delectus molestias. Enim incidunt cumque quaerat.';

// ======ADD blog-header======================================================

document.getElementsByClassName('blog-header')[0].innerHTML = 'Travelling with your dogs';
document.getElementsByClassName('blog-header')[1].innerHTML = 'How to Walk Multiple Dogs';
document.getElementsByClassName('blog-header')[2].innerHTML = 'Teach Your Dogs to Fetch!';

// ======ADD blog-picture======================================================

document.getElementsByClassName('blog-picture')[0].src = 'images/patrick-hendry-221863-unsplash.jpg';
document.getElementsByClassName('blog-picture')[1].src = 'images/matt-nelson-259365-unsplash.jpg';
document.getElementsByClassName('blog-picture')[2].src = 'images/wyatt-ryan-367017-unsplash.jpg';

// =====CREATE FORM ========================================================

const form = document.createElement('form');
const fields = ['First Name', 'Last Name', 'Email Address', 'Street Address', 'City', 'State', 'Zip Code', 'First Time Adopter?',];

for(let i = 0; i <fields.length; i++) {
    const label = document.createElement('label');
    label.textContent = fields[i];
    label.setAttribute('for',fields[i]);

    const input = document.createElement('input');
    input.setAttribute('id', fields[i]);

    form.appendChild(label);
    form.appendChild(input);

    const submitButton = document.createElement('button');
    submitButton.setAttribute ('type', 'submit');
    submitButton.textContent = 'Submit';

    form.appendChild(submitButton);

    let formContainer = document.querySelector('.form-container');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('form submitted');
        console.log(form.elements[0].value);
        console.log(form.elements[1].value);
        console.log(form.elements[2].value);
        console.log(form.elements[3].value);
    })
    formContainer.appendChild(form);
}

console.log(form);
