import Vue from 'vue'

export default ({ app, isClient, store, serverStore }) => {
  if (isClient) {
    console.log(window.document)
    window.$ = require('zepto')
  }
}
