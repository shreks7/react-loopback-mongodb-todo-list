import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

class Item extends Component{
  constructor(props){
      super(props);
      this.state={
        todo:this.props.todo
      }
  }

  onDone(){
    let todoId = this.state.todo.id;
    let newTodo = this.state.todo;
    newTodo.done = true;

    this.setState({
      todo:newTodo
    });

    axios.request(
      {
        url:`http://localhost:3001/api/items/${todoId}`,
        method:"put",
        data:this.state.todo
      })
    .then(response=>{
      //console.log(response)
    })
    .catch(err => console.log(err))
  }

  _handleDelete(id){
       this.props._handleDelete(id);
   }

  onDelete(){
    let todoId = this.state.todo.id;
    axios.delete(`http://localhost:3001/api/items/${todoId}`)
    .then(reponse=>{
      this._handleDelete(todoId);
    }).catch(err=>console.log(err));

  }

  fixDate(date){
    return new moment(date).fromNow();
  }

  render(){
    let isDone = this.state.todo.done;
    if(isDone){
      return(
        <li className="tm-list-item-done">
          <button className="uk-icon-button \
          tm-list-item-link" uk-icon="icon: close"
          onClick={this.onDelete.bind(this)}
          ></button>
          {this.state.todo.title}
          <div className="uk-float-right">
              {this.fixDate(this.state.todo.date)}
          </div>
        </li>
      )
    }
    else
    {
      return(
        <li className="tm-list-item">
          <button className="uk-icon-button \
          tm-list-item-link" uk-icon="icon: check"
          onClick={this.onDone.bind(this)}
          >
          </button>
          {this.state.todo.title}
          <div className="uk-float-right">
              {this.fixDate(this.state.todo.date)}
          </div>
        </li>
      )
    }
  }
}

  export default Item;
