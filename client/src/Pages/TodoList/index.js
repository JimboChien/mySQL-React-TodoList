import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Card,
  ButtonGroup,
} from "react-bootstrap";
import axios from 'axios';
import './index.css'

export class TodoList extends Component {

  state = {
    title: "",
    description: "",
    taskList: []
  };

  componentDidMount() {
    this.getTaskList();
  }

  getTaskList = () => {
    axios.get('http://localhost:3001/tasks')
    .then((response) => {
      this.setState({
        taskList: response.data
      })});
  }

  onDeleteClick = taskid => {
    axios.delete(`http://localhost:3001/deleteTask/${taskid}`)
    // to refresh view immediately
    this.setState({
      taskList: this.state.taskList.filter((task) => {return task.taskid != taskid})
    })
  };

  onInsertClick = () => {
    // console.log('insert')
    axios.post('http://localhost:3001/addTask', {
      title: this.state.title,
      description: this.state.description
    }).then(() => {
      this.getTaskList();
    });
  };

  render() {
    console.log(this.state.title, this.state.description, this.state.taskList)
    return (
      <Container>
        <Row>
          <h1>代辦清單</h1>
        </Row>
        <Row>
          <Col xs={2} md={3} lg={3} />
          <Col xs={8} md={6} lg={6}>
            <InputGroup>
              <FormControl
                value={ this.state.title } 
                onChange={ e => this.setState({
                  title: e.target.value
                })}
                placeholder="代辦事項" />
              <FormControl
                style={{ width: '50%'}}
                value={ this.state.description }
                onChange={ e => this.setState({
                  description: e.target.value
                })}
                placeholder="詳細內容" />
              <Button 
               variant="outline-primary"
               onClick={ () => this.onInsertClick() }>
                新增
              </Button>
            </InputGroup>
          </Col>
          <Col xs={2} md={3} lg={3}/>
        </Row>
        <hr />
        <Row>
        {this.state.taskList.map((task) => {
          return (
          <Col xs={12} md={6} lg={4}>
            <Card border="dark">
              <Card.Body>
                <Card.Title>{ task.title }</Card.Title>
                <hr />
                <Card.Text>
                  { task.description }
                </Card.Text>
                <ButtonGroup>
                  <Button 
                    className="card-btn"
                    variant="outline-success" 
                    >
                      完成
                  </Button>
                  <Button 
                    variant="outline-danger"
                    onClick={ () => this.onDeleteClick(task.taskid) }>
                      刪除
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
          </Col>
        )})}
        </Row>
      </Container>
    );
  }
}

export default TodoList;
