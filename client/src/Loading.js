import React from 'react'
import Bubbles from './Bubbles'

export default class Welcome extends React.Component {
  render() {
    const { opacity } = this.props

    const containerStyle = {
      background: '#E64369',
      bottom: 0,
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Helvetica Neue, Helvetica',
      fontSize: 30,
      fontWeight: '100',
      justifyContent: 'center',
      left: 0,
      position: 'absolute',
      right: 0,
      textAlign: 'center',
      top: 0,
    }

    const openSourceProject = {
      color: 'white',
      fontSize: 16,
      margin: 0,
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
