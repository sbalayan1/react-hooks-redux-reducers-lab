export function manageFriends(state, action) {
  switch (action.type) {
    case 'friends/add':
      return ({friends:[...state.friends, action.payload]})
    case 'friends/remove':
      return {friends: state.friends.filter(friends => friends.id !== action.payload)}
    default: 
      return state
  }
}

let state = {friends: []}
