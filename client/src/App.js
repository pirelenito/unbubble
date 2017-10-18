import React from 'react'
import { Motion, spring } from 'react-motion'
import axios from 'axios'
import YouTube from './YouTube'
import Loading from './Loading'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { width: 1920, height: 1080 }
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.updateSize())
    this.updateSize()
    this.loadNext()
  }

  updateSize() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  loadNext() {
    this.setState({ id: null })

    // wait a little on the loading
    // so that people understand what
    // is going on
    setTimeout(() => {
      axios.get('/find-random-video').then(
        response => {
          this.setState({ id: response.data.id })
        },
        () => location.reload()
      )
    }, 2000)
  }

  render() {
    const { width, height, id } = this.state

    return [
      <Motion defaultStyle={{ opacity: 1 }} style={{ opacity: spring(id ? 0 : 1) }}>
        {style =>
          style.opacity > 0.01 && <Loading width={width} height={height} opacity={style.opacity} />}
      </Motion>,
      id && (
        <YouTube
          width={width}
          height={height}
          videoId={id}
          onEnd={() => this.loadNext()}
          onError={() => this.loadNext()}
        />
      ),
    ]
  }
}
