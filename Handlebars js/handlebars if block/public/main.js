const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);

const context = {
    opinion: true
};

// * if the opinion is false, then it will return else statement
context.opinion = false;
 
const compiledHtml = template(context);
const debateElement = document.getElementById('debate');
debateElement.innerHTML = compiledHtml;