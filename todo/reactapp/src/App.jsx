import  { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor (props){
    super(props);
   this.state = {
  todoList: [],
  activeItem: {
    id: null,
    title: '',
    completed: false
    },
    editing:false,
  };
  this.fetchTasks = this.fetchTasks.bind(this)


  }
  componentDidMount(){
    this.fetchTasks()
  }
  fetchTasks(){
    console.log('fetching componenet')
  }
  render() {
    return (
      <div className=''>
        <div id="task-container">
          <div id="form-wrapper">
            <form action="">
              <div className="flex-wrapper gap-3">
              <div style={{flex:6}}>
                <input type="text" name="title" id="" placeholder='enter task' className='form-control'/>
              </div>
              <div style={{flex:1}}>
                <input type="submit" id='submit' className='btn btn-warning rounded' />
              </div>
            </div>
            </form>
          </div>
          <div id="list-wrapper">

          </div>
        </div>
      </div>
    )
  }
}
