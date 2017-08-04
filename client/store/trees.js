import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_TREES = 'GOT_TREES'

/**
 * INITIAL STATE
 */
const defaultTrees = []

/**
 * ACTION CREATORS
 */
const gotTrees = trees => ({type: GOT_TREES, trees})

/**
 * THUNK CREATORS
 */
export const fetchTrees = () =>
  dispatch =>
    axios.get('/https://data.cityofnewyork.us/resource/5rq2-4hqu.json')
      .then(res =>
        dispatch(gotTrees(res.data)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultTrees, action) {
  switch (action.type) {
    case GOT_TREES:
      return action.trees
    default:
      return state
  }
}