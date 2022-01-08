import { produce } from 'immer'
import { parseJsonByString } from '../common/utils'

const initialSchema = parseJsonByString(window.localStorage.schema, {
  name: 'Page',
  attributes: {},
  children: []
})

const defaultState = {
  schema: initialSchema
}

const reducer = (state = defaultState, action) => produce(state, (draft) => {
  
})

export default reducer