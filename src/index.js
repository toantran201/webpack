import _ from 'lodash'
import './assert/styles/style.css'
import Icon from './assert/images/icon.png'
import Data from './assert/data/data.xml'

function component() {
    const element = document.createElement("div");

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    element.classList.add('hello');

    const myIcon = new Image()
    myIcon.src = Icon

    element.appendChild(myIcon)

    console.log(Data)

    return element;
}

document.body.appendChild(component());



// "webpack": "npx webpack --config webpack.config.js"