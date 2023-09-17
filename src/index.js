import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//function to add return the list elements back to the <ul>
//props are passed out using props
function ListContain(props) {
  return (
    <li>
      <input type="checkbox" 
      onChange={props.onChange}
      />
      <label style={{ textDecoration:  props.todo.complete ? "line-through" : ""}}>{props.todo.cat}</label>
      <label style={{ textDecoration:  props.todo.complete ? "line-through" : ""}}>{props.todo.desc}</label>
      <button onClick={props.deleteTask} className="delete">Delete</button>
    </li>
  );
}

class TodoForm extends React.Component {
  state = {
    id: 11, //id starts at 11 because there is already 10 other tasks defined below
    cat: "",
    desc: ""
  }

//everytime user types it automaticaly changes the state of either cat/desc to the input value
handleChange = (event) => {
  console.log(event);
  this.setState({
    [event.target.name]: event.target.value
  })
}

//submit form function
handleSubmit = (event) =>{
  event.preventDefault();
  if(this.state.cat){
  this.setState({id: this.state.id+1}) //add 1 to the last id
  //submit form with the defined in the state previously by the handleChange
  this.props.onSubmit({
    id: this.state.id,
    cat: this.state.cat,
    desc: this.state.desc,
    complete: false
  });

  //on submit clear the inputs values
  this.setState({
    cat: "",
    desc: ""
  });
  }
}
//display the form elements
  render(){
    return (
    <form onSubmit={this.handleSubmit}>
    <div className="Input">
      <input
      id="inputCat"
      className="Input-text" 
      name="cat" 
      value={this.state.cat} 
      onChange={this.handleChange}
      placeholder="Task Category"/>
      <label for="inputCat" className="Input-label">Category</label>
    </div>

    <div className="Input">  
      <input
      id="inputDesc"
      className="Input-text"
      name="desc" 
      value={this.state.desc} 
      onChange={this.handleChange}
      placeholder="Task Description"/>
      <label for="inputDesc" className="Input-label">Description</label>
    </div>
    <button onClick={this.handleSubmit}>Add</button>
  </form>
    );
  } 
}

//Main todo class TodoList
class TodoList extends React.Component {
  //hard coded tasks inside the main todos state
  state = {
    todos: [
      {id: 0, cat: "Web", desc: "Study for the Quiz", complete: false},
      {id: 1, cat: "Portfolio", desc: "Perfect personal logo", complete: false},
      {id: 2, cat: "Portfolio", desc: "Hard code personal portfolio using React", complete: false},
      {id: 3, cat: "Portfolio", desc: "Select best portfolio pieces", complete: false},
      {id: 4, cat: "Resume", desc: "Update Resume", complete: false},
      {id: 5, cat: "Project Management", desc: "Study for Quiz on Friday", complete: false},
      {id: 6, cat: "Carrer Planning", desc: "Create a quotation, cover letter, pitch for building Website", complete: false},
      {id: 7, cat: "NextGenDinner", desc: "Pick date for interview", complete: false},
      {id: 8, cat: "Website", desc: "Have website ready to present in NGD interview", complete: false},
      {id: 9, cat: "Internship", desc: "Jam3, find more companies like them", complete: false},
      {id: 10, cat: "UX Class", desc: "Read Netflix case study and come with a discussion question", complete: false}
    ]
  };

  //add a todo function - add the new task + copies all the already defined tasks
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };
  
  //when task toogled as complete change the complete state to true if the id matches 
  toogleComplete = id =>{
    this.setState({
      todos: this.state.todos.map(todo =>{
        console.log(todo.id);
        /* Update tasks complete status. If the clicked id matches the row 
        change the complete state to inverse, but keep the other states the same*/
        if (todo.id === id){
          return{
            ...todo,
            complete: !todo.complete
          };
        }else{
          return todo;
        }
      })
    });
  };

  //delete task by creating a new array with all tasks that don't match the targeted id
  deleteTask = id =>{
    console.log("delete this" + id);
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  };

  //function to verify tasks with state complete to send back a message
  CompleteMessage(tasks){
    if(tasks <= 0){
      return "All tasks are completed. Good Job!";
    }else{
      return `Tasks Remaining: ${tasks}`;
    }
  }

  //display the main div + Form component + List of todos component
  render(){
    return (
    <div>
      <h1 className="title">To-Do List</h1>
      <TodoForm onSubmit={this.addTodo} />
      <div className="wrapper">
      <ul className="task-row">
        {this.state.todos.map(todo => (
          <ListContain //props sent to the component
            key={todo.id} 
            onChange={() => this.toogleComplete(todo.id)}
            deleteTask={() => this.deleteTask(todo.id)}
            todo={todo} />
        ))}
      </ul>
      </div>
      <h3>{this.CompleteMessage(this.state.todos.filter(todo => !todo.complete).length)}</h3>
      </div>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById("root"));