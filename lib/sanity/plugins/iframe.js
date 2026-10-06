'use client'

import Iframe from 'react-iframe'
import getVideoId from 'get-video-id'
import { cx } from '@/utils/all'

const IframePreview = ({ value }) => {
  const { url, height } = value
  if (!url) {
    return <p>Missing Embed URL</p>
  }
  const { id, service } = getVideoId(url)

  const isYoutubeVideo = id && service === 'youtube'

  const finalURL = isYoutubeVideo
    ? `https://www.youtube-nocookie.com/embed/${id}`
    : url

  return (
    <Iframe
      url={finalURL}
      width='100%'
      height={height || '350'}
      className={cx(!height && 'aspect-video', 'rounded-md')}
      display='block'
      position='relative'
      frameBorder='0'
      allowFullScreen
      loading='lazy'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture'
    />
  )
}

export default IframePreview