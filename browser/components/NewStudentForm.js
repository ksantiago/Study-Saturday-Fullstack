import React from 'react'

class NewStudentForm extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <form>
        <label>First Name:</label>
        <input type="text" name="firstName" />

        <label>Last Name:</label>
        <input type="text" name="lastName" />

        <label>Email:</label>
        <input type="text" name="email" />

        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default NewStudentForm
