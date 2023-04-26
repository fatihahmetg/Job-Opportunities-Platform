import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateStudent from './components/create-student.component'
import EditStudent from './components/edit-student.component'
import StudentList from './components/student-list.component'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'https://job-platform-fxg147.herokuapp.com/create-student'} className="nav-link">
                  the Dream Job
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'https://job-platform-fxg147.herokuapp.com/create-student'} className="nav-link">
                    Post a Job
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/student-list'} className="nav-link">
                    Job List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="https://job-platform-fxg147.herokuapp.com/"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="https://job-platform-fxg147.herokuapp.com/create-student"
                    component={(props) => <CreateStudent {...props} />}
                  />
                  <Route
                    exact
                    path="https://job-platform-fxg147.herokuapp.com/edit-student/:id"
                    component={(props) => <EditStudent {...props} />}
                  />
                  <Route
                    exact
                    path="https://job-platform-fxg147.herokuapp.com/student-list"
                    component={(props) => <StudentList {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
