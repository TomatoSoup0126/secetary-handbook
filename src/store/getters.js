const getters = {
  userId: state => state.user.userId,
  isAuth: state => state.user.isAuth,
  token: state => state.user.token
}

export default getters
