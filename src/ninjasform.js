import React, { Component } from 'react'
class AddTodo extends Component{
  state = {
    item: null,
    id: null
  }
  getItem = (e) =>{
    this.setState({
      [e.target.id]: e.target.value,
      id: Math.random()
    })
    // e.target.value = this.state.item
  }
  addItem = (e) =>{
    e.preventDefault();
    if(this.state.item){
      // console.log(this.state);
      this.props.getItem(this.state)
      document.querySelector("#item").value = "";
      this.setState({
        item: null,
        id:null
      })
    } else{
      return
    }
  }
  render(){
    return (
      <form onSubmit={this.addItem}>
        <input type="text" id="item" onChange={this.getItem}/>
        <button className="btn">Add</button>
      </form>
    );
  }
}
export default AddTodo;














// import React, {Component} from 'react';
// class AddNinjas extends Component {
//     state = {
//         name : null,
//         age : null,
//         belt : null
//     }    
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log(this.state);
//         this.props.addNinjas(this.state)
//         document.querySelector('#name').value = '';
//         document.querySelector('#age').value = '';
//         document.querySelector('#belt').value = '';
//     }
//     render(){
//         return (
//           <div>
//             <form onSubmit={this.handleSubmit}>
//               <input type="text" id="name" onChange={this.handleChange} />
//               <input type="text" id="age" onChange={this.handleChange} />
//               <input type="text" id="belt" onChange={this.handleChange} />
//               <button>submit</button>
//             </form>
//           </div>
//         );
//     }
// }
// export default AddNinjas;
