'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const targetElement = document.getElementById('target');
students.forEach((student) => {
    const option = document.createElement('option');
    option.textContent = student.name;
    option.value = student.id;
    targetElement.appendChild(option);
});