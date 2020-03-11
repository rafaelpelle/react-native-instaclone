import React, { useState, useEffect, useCallback } from 'react'
import { View, FlatList } from 'react-native'

import axiosClient from '../../services/axiosClient'
import { styles } from './styles'
import Post from '../../components/Post'
import Loader from '../../components/Loader'

const limit = 4

export default function Feed({ navigation }) {
  const [feedData, setFeedData] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [viewable, setViewable] = useState([])

  useEffect(() => {
    loadFeed()
  }, [])

  const loadFeed = async (pageToLoad = page, shoudRefresh = false) => {
    if (total && page > total) return
    setLoading(true)
    try {
      const response = await axiosClient.get(
        `feed?_expand=author&_limit=${limit}&_page=${pageToLoad}`,
      )
      setFeedData(shoudRefresh ? response.data : [...feedData, ...response.data])
      setTotal(Math.floor(response.headers['x-total-count'] / limit))
      setPage(page + 1)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    setFeedData([])
    await loadFeed(1, true)
    setRefreshing(false)
  }

  const handleViewChange = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id))
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={feedData}
        keyExtractor={(post) => String(post.id)}
        onEndReached={() => loadFeed()}
        onEndReachedThreshold={0.1}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        onViewableItemsChanged={handleViewChange}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20, minimumViewTime: 500 }}
        renderItem={({ item }) => <Post postData={item} shouldLoad={viewable.includes(item.id)} />}
        ListFooterComponent={loading && <Loader />}
      />
    </View>
  )
}
