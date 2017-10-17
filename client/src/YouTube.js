import React from 'react'

/**
 * Controlled component on top of YouTube's iframe API
 */
export default class YouTube extends React.Component {
  componentDidMount() {
    loadPlayerApi().then(Player => {
      this.player = new Player(this.el, {
        height: this.props.height,
        width: this.props.width,
        videoId: this.props.videoId,
        events: {
          onReady: () => this.player.playVideo(),
          onStateChange: ({ data }) => {
            console.log(data)
            if (data === 0) return this.props.onEnd()
          },
          onError: this.props.onError,
        },
      })
    })
  }

  componentWillUnmount() {
    this.player.destroy()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.height !== this.props.height || nextProps.width !== this.props.width) {
      this.player.setSize(nextProps.width, nextProps.height)
    }

    if (nextProps.videoId !== this.props.videoId) {
      this.player.loadVideoById(nextProps.videoId, 0, 'large')
    }
  }

  render() {
    return <div ref={el => (this.el = el)} />
  }
}

/**
 * Loads the global YouTube API, but encapsulates it nicelly in
 * a promise based API.
 */
const loadPlayerApi = () =>
  new Promise((resolve, reject) => {
    if (window.YT) return resolve(window.YT.Player)

    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'

    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => resolve(window.YT.Player)
  })
