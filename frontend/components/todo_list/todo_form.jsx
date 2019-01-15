import React from 'react';
import { id_generator } from '../../util/id_generator';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
   
    e.preventDefault();
    
    const todo = Object.assign({}, this.state, { id: id_generator() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    }); 

  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
          <input
              value={this.state.title}
              onChange={this.update('title')}
              />
          </label>
          <label>Body:
          <textarea
              value={this.state.body}
              onChange={this.update('body')}
              >
            </textarea>
          </label>
          <button>Create Todo!</button>
        </form>
      </div>
    )
  }

}

export default TodoForm
