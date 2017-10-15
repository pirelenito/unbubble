import React from 'react'
import { render } from 'react-dom'
import YouTube from 'react-youtube'
import axios from 'axios'

class App extends React.Component {
  componentWillMount() {
    window.addEventListener('resize', () => this.updateSize())
    this.updateSize()

    axios.get('/find-random-video').then(
      response => {
        this.setState({ id: response.data.id })
      },
      () => location.reload()
    )
  }

  updateSize() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    const { width, height, id } = this.state

    const opts = {
      height,
      width,
      playerVars: {
        autoplay: 1,
      },
    }

    return !id ? (
      <div>loading</div>
    ) : (
      <YouTube
        opts={opts}
        videoId={id}
        onEnd={() => location.reload()}
        onError={() => location.reload()}
      />
    )
  }
}

render(<App />, document.getElementById('root'))
