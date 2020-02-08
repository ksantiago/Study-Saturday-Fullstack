import React, { Component } from 'react';
import axios from 'axios';

import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';
import NewStudentForm from './NewStudentForm'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      hideForm: true
    };

    this.selectStudent = this.selectStudent.bind(this);
    this.handleAddNewStudentClick = this.handleAddNewStudentClick.bind(this)
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student,
    });
  }

  handleAddNewStudentClick(e) {
    e.preventDefault()
    this.state.hideForm ? this.setState({ hideForm: false }) : this.setState({ hideForm: true })

  }

  render() {
    return (
      <div>

        <h1>Students</h1>

        <button onClick={this.handleAddNewStudentClick}>Add New Student</button>
          {
            this.state.hideForm ?
            null :
            <NewStudentForm />
          }
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
      </div>
    );
  }
}
