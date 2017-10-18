import React from 'react'
import Bubbles from './Bubbles'

export default class Welcome extends React.Component {
  render() {
    const { width, height, opacity } = this.props

    const containerStyle = {
      background: '#E64369',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Helvetica Neue, Helvetica',
      fontSize: 30,
      fontWeight: '100',
      height: height,
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      textAlign: 'center',
      top: 0,
      width: width,
    }

    const openSourceProject = {
      color: 'white',
      fontSize: 16,
      margin: 0,
      opacity: 0.5,
      padding: 5,
      position: 'absolute',
      right: 0,
      textDecoration: 'none',
      top: 0,
    }

    return (
      <div style={{ ...containerStyle, opacity: opacity }}>
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
