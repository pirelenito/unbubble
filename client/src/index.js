import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import YouTube from './YouTube'
import Loading from './Loading'

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
      <Loading width={width} height={height} />
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
