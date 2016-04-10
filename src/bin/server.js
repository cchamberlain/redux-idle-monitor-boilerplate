import fs from 'fs'
import { start } from '../server'

const babelrc = fs.readFileSync('./.babelrc')
let config = JSON.parse(babelrc)

start()
