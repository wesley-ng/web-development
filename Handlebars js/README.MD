## Handlebars JS
 - Handlebars is an external library used to create templates which are a mix of HTML, text, and expressions.
  
 - Handlebars uses expressions which are wrapped inside double braces like: {{someVariable}}
 
 - A script tag with a type of "text/x-handlebars-template" is used to deliver a template to the browser.
  
 - Handlebar.compile() returns a templating function from a template script script intended for Handlebars.
  
 - A template created from .compile() will take an object as an argument and use it as context to generate a string containing HTML.
 - 
- Block helpers have a starting expression and an ending expression. The starting expression will have a # appears before a keyword. The ending expression will have the same keyword but with a / character to denote the end.
- There are some expression like {{#if argument}} to check condition and {{#each someArray}} to iterate elements in array and {{this}} as its placeholder for current value