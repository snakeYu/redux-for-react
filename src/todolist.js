import React from 'react'
import {List,Button,Input} from 'antd'
import store from './store'
import {getInputChangeAction,addItemValue,delItem} from './store/actionCreators'

import 'antd/dist/antd.css'

export default class Todolist extends React.Component{
  constructor(props){
    super(props)
    this.state=store.getState()

    this.handleChangeValue=this.handleChangeValue.bind(this);
    this.fabu=this.fabu.bind(this)
  
    this.handleBtnClick=this.handleBtnClick.bind(this)
    store.subscribe(this.fabu)

  }
  render(){
    return (
      <div style={{margin:'50px'}}>
          <Input value={this.state.inputValue} style={{width:'300px'}} onChange={this.handleChangeValue}  placeholder='这里是占位所用'/>
          <Button onClick={this.handleBtnClick} type='primary'>提交</Button>
          <List style={{width:"300px"}}
            header={<div>这里是头部</div>}
            footer={<div>这里是尾部</div>}
            bordered
            dataSource={this.state.list}
            renderItem={(item,index)=>(<List.Item onClick={this.handleItemClick.bind(this,index)}>{item}</List.Item>)}
          ></List>
      </div>
    )
  }
  handleChangeValue(e){
    const action=getInputChangeAction(e.target.value)
    store.dispatch(action);
  }
  fabu(){
    this.setState(store.getState())
  }
  handleBtnClick(){
    const action= addItemValue();
    store.dispatch(action)
  }
  handleItemClick(i){
    const action=delItem(i)
    store.dispatch(action)
  }
}