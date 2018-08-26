import {CHANGE_VALUE,ADD_ITEM_VALUE,DEL_ITEM} from './actionTypes'
const defaultState={
  inputValue:'',
  list:[1,2,3]
}

export default (state=defaultState,action)=>{
  if(action.type===CHANGE_VALUE){
    const newState=JSON.parse(JSON.stringify(state));
    newState.inputValue=action.value;
    return newState
  }else if(action.type===ADD_ITEM_VALUE){
    const newState=JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue='';
    return newState;
  }else if(action.type===DEL_ITEM){
    const newState=JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState
  }
  return state;
}