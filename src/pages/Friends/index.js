import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'

import { styles } from './styles'
import axiosClient from '../../services/axiosClient'
import Loader from '../../components/Loader'
import FriendItem from '../../components/FriendItem'
import FriendModal from '../../components/FriendModal'

const limit = 20

export default function Friends({ navigation }) {
  const [usersList, setUsersList] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async (pageToLoad = page, shoudRefresh = false) => {
    if (total && page > total) return
    setLoading(true)
    try {
      const response = await axiosClient.get(`users?_limit=${limit}&_page=${pageToLoad}`)
      setUsersList(shoudRefresh ? response.data : [...usersList, ...response.data])
      setTotal(Math.floor(response.headers['x-total-count'] / limit))
      setPage(page + 1)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    setUsersList([])
    await loadUsers(1, true)
    setRefreshing(false)
  }

  const onUserClick = (user) => {
    setSelectedUser(user)
  }

  const onCloseModal = () => {
    setSelectedUser(null)
  }

  return (
    <View style={styles.container}>
      <FriendModal selectedUser={selectedUser} onCloseModal={onCloseModal} />
      <FlatList
        style={{ width: '100%' }}
        data={usersList}
        keyExtractor={(user) => String(user.id)}
        onEndReached={() => loadUsers()}
        onEndReachedThreshold={0.1}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        renderItem={({ item }) => <FriendItem userData={item} onUserClick={onUserClick} />}
        ListFooterComponent={loading && <Loader />}
      />
    </View>
  )
}
