let formElement = document.querySelector('form');

console.log(formElement);

formElement.addEventListener('submit', function(e) {
e.preventDefault();
const inputValue = formElement.elements[0].value;

const dataToSubmit = {
    name: inputValue
}
console.log(dataToSubmit);
})
