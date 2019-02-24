// * create a variable to access innerHTML of handlebar sript
const source = document.getElementById('greet').innerHTML;

// * template function is a function when passed an object returns a compiled template in string
const template = Handlebars.compile(source); 

// * greeting context
const context = {
    greeting: 'Hello World!'
};

// * replace handlebars value with the values inside context
const compiledHtml = template(context);

// * the container that functions as the wrapper of the handlebars compiled template
const fill = document.getElementById('hello');

fill.innerHTML = compiledHtml;