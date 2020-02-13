import { ADD_USER, REMOVE_USER} from '../actions/actionsTypes'

const INITIAL_DATA =  [
  {
    id: 0,
    name: 'Saurabh Hush',
    email: 'saurabh@thehushapp.com',
    role: 'Member'
  },
  {
    id:1,
    name: 'Saurabh Planetworx',
    email: 'saurabh@planetworx.in',
    role: 'Member'
  },
  {
    id:2,
    name: 'Saurabh Kumar',
    email: 'sksaurabh2495@gmail.com',
    role: 'Admin'
  },
  {
    id:3,
    name: 'Praveen Sahu',
    email: 'praveen9581@gmail.com',
    role: 'Member'
  },
  {
    id:4,
    name: 'Vishad Saxena',
    email: 'vishad.saxena@gmail.com',
    role: 'Member'
  },
  {
    id:5,
    name: 'Rajat Chawla',
    email: 'rcrajatchawla@gmail.com',
    role: 'Admin'
  }
 ]

const UserReducer = (state=INITIAL_DATA, action) => {
  switch (action.type){
    case ADD_USER:
      return [
        ...state,{
          id: action.id,
          name: action.name,
          email: action.email,
          role: action.role
          }
      ]
    case REMOVE_USER:
      const numIndex = parseInt(action.id);
      return state.filter(user => user.id !== numIndex);
    default:
      return state
  }
}

export default UserReducer
