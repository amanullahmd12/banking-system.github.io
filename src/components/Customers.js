import React from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
  return (
    <div>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Account Number</th>
      <th scope="col">Add Money</th>
      <th scope="col">Withdraw</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Ayush Agarwal</td>
      <td>123456789</td>
      <td><Link to ="/credit"><button type="button" class="btn btn-primary" >ADD</button></Link></td>
      <td><Link to ="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Saina Grag</td>
      <td>234567891</td>
      <td><Link to ="/credit"><button type="button" class="btn btn-primary">ADD</button></Link></td>
      <td><Link to ="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Aastha Verma</td>
      <td>345678912</td>
      <td><Link to ="/credit"><button type="button" class="btn btn-primary">ADD</button></Link></td>
      <td><Link to ="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Sarthak Kalra</td>
      <td>456789123</td>
      <td><Link to ="/credit"><button type="button" class="btn btn-primary">ADD</button></Link></td>
      <td><Link to ="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Shreyansh Dhyani</td>
      <td>567891234</td>
      <td><Link to ="/credit"><button type="button" class="btn btn-primary">ADD</button></Link></td>
      <td><Link to ="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Abhinav Yadav</td>
      <td>678912345</td>
      <td><Link to ="/credit"><button type="button" class="btn btn-primary">ADD</button></Link></td>
      <td><Link to ="/withdraw"><button type="button" class="btn btn-primary">Withdraw</button></Link></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Customers; 