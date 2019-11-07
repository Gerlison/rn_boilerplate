import { createSelector, createSelectorCreator, defaultMemoize } from 'reselect'
import _ from 'lodash'

const createDeepEqualSelector = createSelectorCreator(
 defaultMemoize,
 _.isEqual
)

const getAuth = createDeepEqualSelector(
  state => state.Auth,
  Auth => Auth
)

export {
  getAuth
}
