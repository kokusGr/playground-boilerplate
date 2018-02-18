// @flow

import React from 'react'
import ReactDOM from 'react-dom'

import Root from 'components/Root'

const container = document.getElementById('application')

if (container) {
  ReactDOM.render(
    <Root />,
    container,
  )
}
