import {createstore} from 'redux'
import todoApp from './reducers'

let store = createstore(todoApp)