import $ from 'jquery'

function sayHello(name) {
  $('body').append('<div>Hello ' + name + '</div>')
}

export default {
  sayHello
}
