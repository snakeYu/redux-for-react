import {CHANGE_VALUE,ADD_ITEM_VALUE,DEL_ITEM} from './actionTypes'
export const getInputChangeAction=(value)=>({
  type:CHANGE_VALUE,
  value
})

export const addItemValue=()=>({
  type:ADD_ITEM_VALUE
})

export const delItem=(index)=>({
  type:DEL_ITEM,
  index
})