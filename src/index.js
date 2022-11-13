import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack' + process.env.API_URL], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());