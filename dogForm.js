
let formElement = document.querySelector('form');

console.log(formElement);

formElement.addEventListener('submit', function(e) {
e.preventDefault();
const inputValue = formElement.elements[0].value;
const inputValue2 = formElement.elements[1].value;
const inputValue3 = formElement.elements[2].value;

const dataToSubmit = {
    firstName: inputValue,
    lastName: inputValue2,
    email: inputValue3,
}
console.log(dataToSubmit);
})
