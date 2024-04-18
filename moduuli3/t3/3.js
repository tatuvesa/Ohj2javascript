'use strict';
const names = ['John', 'Paul', 'Jones'];
const targetElement = document.getElementById('target');
const ul = document.createElement('ul');

/* for (let i = 0; i < names.length; i++) {
    const li = document.createElement('li');
    li.textContent = names[i];
    ul.appendChild(li);
}
*/

names.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
});

targetElement.appendChild(ul);