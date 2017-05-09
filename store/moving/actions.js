import * as types from './types'
import {Utils} from '../../src/common/util'

let utils = new Utils()
const actions = {
  getMoving(store) {
    utils.get('/movie/in_theaters', {}).then(res => {
      store.commit(types.MOVING_LIST, res)
      store.commit(types.MOVING_LOADING, {loading: false})
    })
  },
  getUpcoming(store) {
    utils.get('/movie/coming_soon', {city: store.state.city}).then(res => {
      store.commit(types.MOVING_COMING, res)
      store.commit(types.MOVING_LOADING, {loading: false})
    })
  },
  getTop250(store) {
    utils.get('/movie/top250', {start: store.state.start, count: 7}).then(res => {
      store.commit(types.MOVIE_TOP_250, res)
      store.commit(types.MOVING_LOADING, {loading: false})
    })
  },
  getMovieDetail(store) {
    utils.get(`/movie/subject/${store.state.id}`, {}).then(res => {
      store.commit(types.MOVING_DETAIL, res)
      store.commit(types.MOVING_LOADING, {loading: false})
    })
  },
  getSearchList(store) {
    utils.get(`/movie/search`, {q: store.state.searchText}).then(res => {
      store.commit('SEARCH_LIST', res)
      store.commit('SEARCH_LOADING', {loading: false})
    })
  }
}
export default actions
