// Step 1: Create a state management context
import React, {createContext, useContext, useReducer} from 'react';
import { Component } from '../src/types';

// Step 2: Define types, actions, and reducers
interface State {
  components: Component[];
}

export interface UpdateBackendDataAction {
  type: 'UPDATE_BACKEND_DATA';
  payload: State['components'];
}

type Action = UpdateBackendDataAction;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'UPDATE_BACKEND_DATA':
      return { ...state, components: action.payload };
    default:
      return state;
  }
}

// Step 3: Create a custom hook to access the state and dispatch actions
interface ContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const StateContext = createContext<ContextValue | undefined>(undefined);

export function useStateContext(): ContextValue {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
}

export function ReploGlobalStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    components: [],
  });

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}