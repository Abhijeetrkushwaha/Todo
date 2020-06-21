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
//   // state = {
//   //   ninjas: [
//   //     { name: "Abhijeet", age: 20, belt: "Black", id: 1 },
//   //     { name: "Shubham", age: 20, belt: "Blue", id: 2 },
//   //     { name: "Nandu", age: 19, belt: "Green", id: 3 },
//   //     { name: "Aman", age: 20, belt: "Black", id: 4 },
//   //   ],
//   //   items: [
//   //     { name: "abhijeet", rollNo: 1, },
//   //     { name: "abhi", rollNo: 2 },
//   //     { name: "jeet", rollNo: 3 },
//   //     { name: "abhishek", rollNo: 4 },
//   //   ],
//   // };
//   // addNinjas = (ninja) => {
//   //   // console.log(ninja);
//   //   ninja.id = Math.random();
//   //   let ninjas = [...this.state.ninjas, ninja];
//   //   this.setState({
//   //     ninjas,
//   //   });
//   // };
//   // deleteNinja = (id) => {
//   //   let ninjas = this.state.ninjas.filter((items) => {
//   //     return items.id !== id;
//   //   });
//   //   this.setState({
//   //     ninjas,
//   //   });
//   // };
//   // render() {
//   //   // console.log(this.state.ninjas);

//   //   return (
//   //     <div className="App">
//   //       <h1>My First React App!</h1>
//   //       <p>Welcome :</p>
//   //       <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
//   //       <AddNinjas addNinjas={this.addNinjas} />
//   //       <Table items={this.state.items} />
//   //     </div>
//   //   );
//   // }
// }

// export default App;

import React, { Component } from 'react';
import axios from 'axios'
// import "./App.css"

// DBR8Klvy3Cd7Qmu7lX_YD9G8Kj8wVm7cDZDTvq5bYok


class App extends Component {
  state = {
    post: null,
    search: '',
  }
  componentDidMount() {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=computer&client_id=${process.env.REACT_APP_UNPLASH_API}`
      )
      .then((res) => {
        this.setState({
          post: res.data.results,
        });
        // console.log(this.state.post);
        // console.log(res.data.results);

      });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  }
  handleSubmit = (e) => {
    e.preventDefault()
    document.querySelector('#search').value = ''
    this.setState({
      post: null
    })
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${this.state.search}&client_id=${process.env.REACT_APP_UNPLASH_API}`
      )
      .then((res) => {
        this.setState({
          post: res.data.results,
        });
        // console.log(this.state.post);
        // console.log(res);
      });

  }
  render() {  
    const images = this.state.post ? (this.state.post.map((pics) => {
      return (
        <div className="content" key={pics.id}>
          <img src={pics.urls.small} alt="" />
          <a href={pics.links.download_location}>link</a>
        </div>
      );
    }) ) : (
      <div className="content">
        <p>Loading images</p>
      </div>
    )
    return (
      <div className="App">
        <h1>Abhijeet.R. Kushwaha</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="search" onChange={this.handleChange} />
          <button type="submit">search</button>
        </form>
        {images}
      </div>
    );
  }
}

export default App;
// class Github {
//   constructor() {
//     this.client_id = "4344cc18f43-2b5632ea4";
//     this.client_secret = "42bfa0ba6ca7e7e0c46239f65ccfa6eff41ef4dc";
//     this.repos_count = 5; //we dont wanna see all repos of an individual
//     this.repos_sort = "created: asc";
//   }
//   async getUser(user) {
//     const profileResponse = await fetch(
//       `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
//     );
//     const repoResponse = await fetch(
//       `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
//     );
//     const profile = await profileResponse.json();
//     const repos = await repoResponse.json();

//     return {
//       profile,
//       repos,
//     };
//   }
// }