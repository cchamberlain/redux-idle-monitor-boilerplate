import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as idle } from 'redux-idle-monitor'
import { items } from './items'

const rootReducer = combineReducers({ form
                                    , idle
                                    , items
                                    })

export default rootReducer
