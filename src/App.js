import React, { Component } from "react";
import Navbar from './Component/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'

class App extends Component{
    render() {
      return (
        <BrowserRouter>
          <div className="hi">
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </div>
        </BrowserRouter>
      );
    }
}
export default App







// version 2
// import React, { Component } from "react";
// import AddItem from './ninjas'
// import AddTodo from './ninjasform'
// import './App.css'
// // import Table from './table'
// // import logo from './logo.svg';
// // import './App.css';

// class App extends Component {
//   state = {
//     todoItems: [
//       {item: 'Go to gym', id: 1}
//     ]
//   }
//   getItem = (item) => {
//     let todoItems = [...this.state.todoItems, item];
//      this.setState({
//        todoItems})
//      }
//      deleteItem = (id) =>{
//       console.log(id);
//       let todoItems = this.state.todoItems.filter((item) => {
//         return item.id !== id;
//       })
//       this.setState({
//         todoItems
//       })
//      }
//   render(){
//     return (
//       <div className="container">
//         <h1>Todo</h1>
//         <AddTodo getItem={this.getItem}/>
//         <AddItem todoItems={this.state.todoItems} deleteItem={this.deleteItem}/>
//       </div>
//     );
//   }

  // version 1
  // state = {
  //   ninjas: [
  //     { name: "Abhijeet", age: 20, belt: "Black", id: 1 },
  //     { name: "Shubham", age: 20, belt: "Blue", id: 2 },
  //     { name: "Nandu", age: 19, belt: "Green", id: 3 },
  //     { name: "Aman", age: 20, belt: "Black", id: 4 },
  //   ],
  //   items: [
  //     { name: "abhijeet", rollNo: 1, },
  //     { name: "abhi", rollNo: 2 },
  //     { name: "jeet", rollNo: 3 },
  //     { name: "abhishek", rollNo: 4 },
  //   ],
  // };
  // addNinjas = (ninja) => {
  //   // console.log(ninja);
  //   ninja.id = Math.random();
  //   let ninjas = [...this.state.ninjas, ninja];
  //   this.setState({
  //     ninjas,
  //   });
  // };
  // deleteNinja = (id) => {
  //   let ninjas = this.state.ninjas.filter((items) => {
  //     return items.id !== id;
  //   });
  //   this.setState({
  //     ninjas,
  //   });
  // };
  // render() {
  //   // console.log(this.state.ninjas);

  //   return (
  //     <div className="App">
  //       <h1>My First React App!</h1>
  //       <p>Welcome :</p>
  //       <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
  //       <AddNinjas addNinjas={this.addNinjas} />
  //       <Table items={this.state.items} />
  //     </div>
  //   );
  // }
// }

// export default App;
