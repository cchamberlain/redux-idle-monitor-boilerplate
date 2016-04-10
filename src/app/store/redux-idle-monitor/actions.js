import { IDLESTATUS_AWAY, IDLESTATUS_INACTIVE, IDLESTATUS_EXPIRED } from './constants'

export const idleStatusDelay = idleStatus => (dispatch, getState) => {
  if(idleStatus === IDLESTATUS_AWAY)
    return 5000
  if(idleStatus === IDLESTATUS_INACTIVE)
    return 10000
  if(idleStatus === IDLESTATUS_EXPIRED)
    return 15000
}


export const activeStatusAction = (dispatch, getState) => console.info('USER IS ACTIVE! =)')

export const idleStatusAction = idleStatus => (dispatch, getState) => {
  if(idleStatus === IDLESTATUS_INACTIVE)
    console.info('USER IS INACTIVE!!')
  else if(idleStatus === IDLESTATUS_EXPIRED)
    console.warn('USER IS EXPIRED!!!!!!!! =(')
  else
    console.debug(`USER IS ${idleStatus}!`)
}
