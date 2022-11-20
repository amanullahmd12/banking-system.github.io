import React from 'react'

const Transaction = () => {
  return (
    <div>
      <h2>Transactions</h2>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Account</th>
      <th scope="col">Status</th>
      <th scope="col">Amount</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr>
      <th scope="row">1</th>
      <td>Ayush Agarwal</td>
      <td>123456789</td>
      <td>Debit</td>
      <td>2000</td>
      <td>8000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Saina Grag</td>
      <td>234567891</td>
      <td>Credit</td>
      <td>4000</td>
      <td>14000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Aastha Verma</td>
      <td>345678912</td>
      <td>Debit</td>
      <td>1000</td>
      <td>9000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Sarthak Kalra</td>
      <td>456789123</td>
      <td>Credit</td>
      <td>10000</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Shreyansh Dhyani</td>
      <td>567891234</td>
      <td>Credit</td>
      <td>10000</td>
      <td>10000</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Abhinav Yadav</td>
      <td>678912345</td>
      <td>Credit</td>
      <td>10000</td>
      <td>10000</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Transaction;