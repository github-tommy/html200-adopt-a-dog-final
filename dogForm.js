
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
        console.log(form.elements[4].value);
        console.log(form.elements[5].value);
        console.log(form.elements[6].value);
        console.log(form.elements[7].value);
    })
    formContainer.appendChild(form);
}

console.log(form);
