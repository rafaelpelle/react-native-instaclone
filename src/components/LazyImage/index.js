import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, Animated } from 'react-native'
import { styles } from './styles'

export default function LazyImage({ aspectRatio, source, smallSource, shouldLoad }) {
  const style = { aspectRatio, ...styles.image }
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    shouldLoad && setLoaded(true)
  }, [shouldLoad])

  return (
    <ImageBackground style={style} blurRadius={0.5} resizeMode='contain' source={smallSource}>
      {loaded && <Image style={style} blurRadius={0} source={source} resizeMode='contain' />}
    </ImageBackground>
  )
}
