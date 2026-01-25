import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import {useNavigate} from 'react-router-dom'

function ListEmployeeComponent() {

  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  function getAllEmployees() {
    listEmployees().then(res => {
      setEmployees(res.data)
    }).catch(error => {
      console.error(error);
    })
  }

  useEffect(() => {
    // listEmployees().then(response => {
    //   setEmployees(response.data)
    // }).catch(error => {
    //   console.error(error);
    // })
    getAllEmployees();
  }, [])

  // const dummyData = [
  //   {
  //     "id": 1,
  //     "firstName": "John",
  //     "lastName": "Doe",
  //     "email": "john1@mail.com"
  //   },
  //   {
  //     "id": 2,
  //     "firstName": "Jane",
  //     "lastName": "Doe",
  //     "email": "jane1@mail.com"
  //   },
  //   {
  //     "id": 3,
  //     "firstName": "Tom",
  //     "lastName": "Doe",
  //     "email": "tom1@mail.com"
  //   }
  // ]  

  function addNewEmployee() {
    navigator('/add-employee')
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`)
  }

  function removeEmployee(id) {
    console.log('removed id: ', id);

    deleteEmployee(id).then(() => {  //! (res)
    
      getAllEmployees();

    }).catch(error => {
      console.error(error); 
    })
  }

  return (
    <div className='container'>

      <h2 className='text-center'>List Of Employees</h2>

      <button 
        className='btn btn-primary mb-2'
        onClick={addNewEmployee}
        >
          Add Employee
        </button>

      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            // dummyData.map(employee => 
            employees.map(employee => 
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className='btn btn-warning'
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>

                  <button className='btn btn-danger'
                    onClick={() => removeEmployee(employee.id)}
                    style={{marginLeft: '10px'}}
                  >
                    Delete
                  </button>

                </td>
              </tr>
            )
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent