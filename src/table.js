import React, {Component} from 'react'



class Table extends Component {
  render() {
      
      const { items } = this.props;
      let table = items.map((items) => {
              return (
                <tr key={items.rollNo}>
                  <td>{items.name}</td>
                  <td>{items.rollNo}</td>
                </tr>
              );
           
      })
      return (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Roll-No</th>
              </tr>
            </tbody>
          </table>
          {table}
        </div>
      );
  }
}

export default Table