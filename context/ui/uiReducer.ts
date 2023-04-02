import { UIState } from './'

type UIActionType =
| { type: '[UI] - ActionName' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch(action.type) {
    case '[UI] - ActionName':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }

    default:
      return state
  }
}