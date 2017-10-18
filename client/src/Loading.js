import React from 'react'
import Bubbles from './Bubbles'

export default class Welcome extends React.Component {
  render() {
    const { width, height } = this.props

    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      color: 'white',
      background: '#E64369',
      fontFamily: 'Helvetica Neue, Helvetica',
      fontWeight: '100',
      fontSize: 30,
      position: 'absolute',
      top: 0,
      left: 0,
      height: height,
      width: width,
      textAlign: 'center',
    }

    const openSourceProject = {
      color: 'white',
      textDecoration: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      margin: 0,
      fontSize: 16,
      padding: 5,
      opacity: 0.5,
    }

    return (
      <div style={containerStyle}>
        <p>
          <Bubbles />
        </p>
        <p>Searching videos outside of your bubble…</p>
        <a href="http://github.com/pirelenito/unbubble" style={openSourceProject}>
          What is this?
        </a>
      </div>
    )
  }
}
