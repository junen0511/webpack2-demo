import $ from 'jquery'
import handlebar from 'handlebars/runtime'
import header from './header'

import './assets/index.css'

function component () {
    let element = document.createElement('div')
    element.innerHTML = 'Hello webpack list'
    return element
}

document.body.appendChild(component())

$('body').append('<span>我是Jquery list</span>')

header.sayHello('list')