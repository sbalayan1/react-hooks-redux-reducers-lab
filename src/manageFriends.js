export function manageFriends(state, action) {
  switch (action.type) {
    case 'friends/add':
      return ([...state, state.payload])
    case 'friends/remove':
      state.friends.filter(friends => friends.id !== state.payload)
    default: 
      return state
  }
}

let state = {friends: []}
