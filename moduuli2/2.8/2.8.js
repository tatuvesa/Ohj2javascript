function concat(strings) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
    }
    return result;
}

const strings = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
const wholeString = concat(strings);

document.body.innerHTML = `<p>${wholeString}</p>`;