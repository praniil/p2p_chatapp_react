import React from 'react'
import { useReducer } from 'react'
import WebSocket from 'ws';

enum ActionType {
  AddMessage = 'ADD_MESSAGE',
  SetMessage = 'SET_MESSAGE',
}

interface AddMessageAction {
  type: ActionType.AddMessage;
  payload: string
}

interface SetMessageAction {
  type: ActionType.SetMessage;
  payload: string
}

type Action = AddMessageAction | SetMessageAction;

interface initialStateInterface {
  message: string;
  messages: string[];
}
const initialState: initialStateInterface = {
  message: '',
  messages: [],
}

function reducer(state: initialStateInterface, action: Action) {
  switch (action.type) {
    case ActionType.AddMessage:
      return { ...state, messages: [...state.messages, action.payload] }
    case ActionType.SetMessage:
      return { ...state, message: action.payload }
    default:
      return state
  }
}

function setWsReducer(ws: WebSocket, action: ) {

}

const ChatWindow: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type:ActionType.SetMessage, payload: event.target.value})
  }
  function handleSendButton() {
    if (state.message.trim() != '') {         //checks whether the message is empty
      dispatch({type:ActionType.AddMessage, payload:state.message})
      dispatch({type:ActionType.SetMessage, payload:''})
    }
  }
  function handleKeyPress(event:React.KeyboardEvent<HTMLInputElement>) {
    if (event.key == 'Enter') {
      handleSendButton();
    }
  }

  return (
    <div>
      <div>
        {state.messages.map((message, index) => (
          <div key={index}>
            {message}
          </div>
        ))}
      </div>
      <input type="text" name="message" id="message" placeholder='write your message' value={state.message} onChange={handleMessageChange} onKeyDown={handleKeyPress}/>
      <button onClick={handleSendButton}>Send</button>
    </div>
  )
}

export default ChatWindow