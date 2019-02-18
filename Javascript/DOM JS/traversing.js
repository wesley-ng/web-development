let first = document.querySelector('body').children[0];
// ? modify the first child of the body which is The Brown Bear
console.log(first);
first.innerHTML = 'I am the child!';
first.parentNode.innerHTML = 'I am the parent and my inner HTML has been replaced!';