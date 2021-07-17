import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner'
import UserProfile from 'components/UserProfile/UserProfile'
import Tweet from 'components/Tweet/Tweet'
import { useParams } from 'react-router-dom'
import { Container } from './UserProfilePageStyled'

const UserProfilePage = () => {
  const [currentUserProfile, setCurrentUserProfile] = useState()
  const [posts, setPosts] = useState([])
  const { name } = useParams()
  const users = useSelector((state) => state.app.users)
  const feed = useSelector((state) => state.app.feed)

  useEffect(() => {
    // match the current user and user posts on profile page
    const res = users.find((user) => user.userName === name)
    setCurrentUserProfile(res)
    const userPosts = feed.filter((post) => post.user.userName === name)
    setPosts(userPosts)
  }, [name, users, feed])

  return (
    <Container>
      <UserProfile currentUserProfile={currentUserProfile} />
      {posts?.length > 0 ? (
        posts.map((post) => <Tweet key={post.id} tweet={post} />)
      ) : (
        <LoadingSpinner />
      )}
      {posts?.length === 0 ? <div>No posts</div> : null}
    </Container>
  )
}

export default UserProfilePage
