import configure  from 'redux-idle-monitor'
import { IDLE_STATUSES } from './constants'
import { idleStatusDelay, activeStatusAction, idleStatusAction } from './actions'

const opts = { appName: 'js', IDLE_STATUSES, idleStatusDelay, activeStatusAction, idleStatusAction }

const { reducer, actions, middleware } = configure(opts)
export { reducer, actions, middleware }


