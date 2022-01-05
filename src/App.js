import React, { Component } from 'react';
import './App.css';
import './BlogCard'
import BlogItem from './BlogCard';
import { isArrayEmpty } from './Utils';

class App extends Component {
  /*
  const FirstName = 'John';
  const LastName = 'Wick';
  const age = 28;
  const job = 'Hitman Team';

  const getFullName = (FirstName, LastName) => {
    return `${FirstName} ${LastName}`
  } 

  const inputPlaceholder = 'Enter Details';

  const detailsInputBox = <input placeholder = {inputPlaceholder} autoComplete></input>
 
  const mArr = [1,2,3,4]

  const mObj = {
    name: 'Totto',
    age1: 35
  }  

  blogObj = {
    title: 'Blog Title1',
    description: 'Lorem Ipsum DolorLorem Ipsum Dolor Lorem Ipsum Dolor'
  } */

  blogArr = [
   {
     id: 1,
    title: 'Blog Title1',
    description: 'Lorem Ipsum DolorLorem Ipsum Dolor Lorem Ipsum Dolor'
   },
   {
     id: 2,
    title: 'Blog Title1',
    description: 'Lorem Ipsum DolorLorem Ipsum Dolor Lorem Ipsum Dolor'
   },
   {
     id: 3,
    title: 'Blog Title1',
    description: 'Lorem Ipsum DolorLorem Ipsum Dolor Lorem Ipsum Dolor'
   }
  ] 

  showBlogs = true;

  blogCards = isArrayEmpty(this.blogArr) ?[] : this.blogArr.map((item, pos) => {
    console.log(item);

    return (
      <BlogItem className={'Blog'} key={pos} title={item.title} description={item.description} id={item.id} />
      /* <div className="BlogCard" key={item.id}>     
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div> */  
    )
  } )

  onClickEvent = () => {
    alert('Button is Clicked')
  }

  render(){
    return (
    <div className="App">
      <button onClick={this.onClickEvent}>Hide List</button>
      <br></br>
      {
       this.showBlogs ? this.blogCards : null
      }
    </div>
    );
  }
}

export default App;
