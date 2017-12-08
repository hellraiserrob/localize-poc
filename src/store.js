import { createStore } from 'redux';
    
import reducer from './reducers/'

function configureStore() {
  return createStore(
    reducer
  )
}

const store = configureStore()
export default store