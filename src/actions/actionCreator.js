import { ADD_USER, REMOVE_USER } from './actionsTypes'

let UserId = 10

export const addUser = (name,email,role) => ({
    type: ADD_USER,
    id: UserId++,
    name: name,
    email: email,
    role: role
})

export const deleteUser = (id) => ({
    type: REMOVE_USER,
    id: id
})