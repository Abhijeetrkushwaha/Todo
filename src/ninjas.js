import React,{ Component } from 'react'
class AddItems extends Component{
  
  render(){
            const { todoItems, deleteItem } = this.props;
            const items = todoItems.map((items) => {
              return (
                <li className="nav-items" key={items.id}>
                  <div className="item">{items.item}</div>
                  <button className="btn" onClick={() =>{deleteItem(items.id)}}>Delete</button>
                </li>
              );
            });
            return <ul className="nav-list">{items}</ul>;
          }
}
export default AddItems;




// import React, { Component } from 'react';

// class Ninjas extends Component {
//     render(){
//         const { ninjas, deleteNinja } = this.props;
//         // console.log(this.props);
          
//         const ninjasList = ninjas.map((items) =>{
//             if(items.age > 19){
//               return (
//                 <div className="ninjas" key={items.id}>
//                   <div>Name : {items.name}</div>
//                   <div>Age : {items.age}</div>
//                   <div>Belt : {items.belt}</div>
//                   <button onClick={() => {deleteNinja(items.id)}} >Delete</button>
//                 </div>
//               );
//             } else{
//               return null;
//             }
//         })   
//         return (
//           <div className="ninjas-list">
//               { ninjasList }
//           </div>
//         );
//     }
// }
// export default Ninjas;