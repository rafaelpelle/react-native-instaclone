import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import axiosClient from '../../services/axiosClient'
import { styles } from './styles'
import Post from '../../components/Post'

export default function Feed({ navigation }) {
  const [feedData, setFeedData] = useState([])
  const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    loadFeed()
  }, [])

  const loadFeed = async () => {
    if (total && page > total) return

    try {
      const response = await axiosClient.get(`feed?_expand=author&_limit=${limit}&_page=${page}`)
      setFeedData([...feedData, ...response.data])
      setTotal(Math.floor(response.headers['x-total-count'] / limit))
      setPage(page + 1)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={feedData}
        keyExtractor={(post) => String(post.id)}
        renderItem={({ item }) => <Post postData={item} />}
        onEndReached={() => loadFeed()}
        onEndReachedThreshold={0.1}
      />
    </View>
  )
}
