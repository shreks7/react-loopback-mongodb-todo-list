import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class AddItem extends Component{
  constructor(props){
    super(props);
  }

  addTodo(newTodo){
    //console.log(newTodo);
    axios.request({
      method:'post',
      url:"http://localhost:3001/api/items",
      data:newTodo
    }).then(response => {
        this._handleAddItem(response.data);
    }).catch(err => console.log(err));
  }

   _handleAddItem(newTodo){
       this.props._handleAddItem(newTodo);
   }

  onSubmit(e){
      if(this.refs.title.value === "") return;

      const newTodo = {
        title:this.refs.title.value,
        done:false
      }
      this.addTodo(newTodo);
      //console.log(this);
      this.refs.itemform.reset();
      e.preventDefault();
  }

  render(){
    return(
      <div>
        <br />
        <form ref="itemform" className="uk-grid-small tm-grid-form-title" uk-grid="true"
            onSubmit={this.onSubmit.bind(this)}>
            <div className="uk-width-1-1">
                <input className="uk-input uk-form-blank" type="text" ref="title"
                placeholder="What's on your mind" />
              </div>
        </form>
      </div>
    )
  }
}

export default AddItem;
