import React from 'react'
import { render } from 'react-dom'
import YouTube from './YouTube'
import axios from 'axios'

class App extends React.Component {
  componentWillMount() {
    window.addEventListener('resize', () => this.updateSize())
    this.updateSize()
    this.loadNext()
  }

  updateSize() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  loadNext() {
    this.setState({ id: null })
    axios.get('/find-random-video').then(
      response => {
        this.setState({ id: response.data.id })
      },
      () => location.reload()
    )
  }

  render() {
    const { width, height, id } = this.state

    return !id ? (
      <h1
        style={{
          color: 'white',
          fontFamily: 'Helvetica',
          fontSize: 16,
          position: 'absolute',
          top: height / 2 - 16 / 2,
          width: width,
          textAlign: 'center',
        }}
      >
        Unwrapping your bubble...
      </h1>
    ) : (
      <YouTube
        width={width}
        height={height}
        videoId={id}
        onEnd={() => this.loadNext()}
        onError={() => this.loadNext()}
      />
    )
  }
}

render(<App />, document.getElementById('root'))
