import React from 'react'

const Money = () => {
  return (
    <div>
          <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Add The Money</h3>
                        <p>Enter the amount money to add</p>
                        <form class="requires-validation" novalidate>

                            <div class="col-md-12">
                               <input class="form-control" type="text" name="name" placeholder="Amount" required></input>
                               <div class="valid-feedback">Username field is valid!</div>
                               <div class="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                           <div class="col-md-12">
                                <select class="form-select mt-3" required>
                                      <option selected disabled value="">Transfer to</option>
                                      <option value="jweb">Ayush Agarwal</option>
                                      <option value="sweb">Saina Garg</option>
                                      <option value="pmanager">Aastha Verma</option>
                                      <option value="jweb">Sarthak Kalra</option>
                                      <option value="sweb">Shreyansh Dhyani</option>
                                      <option value="pmanager">Abhinav Yadav</option>
                               </select>
                                <div class="valid-feedback">You selected a position!</div>
                                <div class="invalid-feedback">Please select a position!</div>
                           </div>

                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Money;