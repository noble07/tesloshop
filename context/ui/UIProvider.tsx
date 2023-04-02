import { useReducer } from 'react'
import { UIContext, uiReducer } from './'

interface UIProviderProps {
  children?: React.ReactNode
}

export interface UIState {
  isMenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
  isMenuOpen: false
}

export const UIProvider = ({children}: UIProviderProps) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const toggleSideMenu = () => {
    dispatch({ type: '[UI] - ActionName' })
  }

  return (
    <UIContext.Provider value={{
      ...state,

      // Methods
      toggleSideMenu,
    }}>
      {children}
    </UIContext.Provider>
  )

}
