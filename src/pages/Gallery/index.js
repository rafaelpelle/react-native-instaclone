import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import { styles } from './styles'
import axiosClient from '../../services/axiosClient'
import Loader from '../../components/Loader'
import GalleryItem from '../../components/GalleryItem'
import GalleryModal from '../../components/GalleryModal'

const limit = 40

export default function Friends({ navigation }) {
  const [imagesList, setImagesList] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    loadImages()
  }, [])

  const loadImages = async (pageToLoad = page, shoudRefresh = false) => {
    if (total && page > total) return
    setLoading(true)
    try {
      const response = await axiosClient.get(
        `gallery?_expand=author&_limit=${limit}&_page=${pageToLoad}`,
      )
      setImagesList(shoudRefresh ? response.data : [...imagesList, ...response.data])
      setTotal(Math.floor(response.headers['x-total-count'] / limit))
      setPage(page + 1)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    setImagesList([])
    await loadImages(1, true)
    setRefreshing(false)
  }

  const onImageClick = (image) => {
    setSelectedImage(image)
  }

  const onCloseModal = () => {
    setSelectedImage(null)
  }

  return (
    <View style={styles.container}>
      <GalleryModal selectedImage={selectedImage} onCloseModal={onCloseModal} />
      <FlatList
        numColumns={4}
        style={styles.list}
        data={imagesList}
        keyExtractor={(image) => String(image.id)}
        onEndReached={() => loadImages()}
        onEndReachedThreshold={0.1}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        renderItem={({ item }) => (
          <GalleryItem imageData={item} onImageClick={onImageClick} onCloseModal={onCloseModal} />
        )}
        ListFooterComponent={loading && <Loader />}
      />
    </View>
  )
}
