import React from 'react';
import './Blog.css';
import Que1 from "../../assets/images/que2.jpg";

const Blog = () => {
    return (
        <div className='container'>
            <div className='mt-4'>
                <button className="btn btn-success">Print this Article</button>
            </div>
            <h3 className='text-center my-3'>Question & Answers</h3>
            <hr />
            <div>
                <h4>1. Differences between uncontrolled and controlled components?</h4>
                <h5 className='ms-3'>Controlled: </h5>
                <ol type='1'>
                    <li>Managed by React state</li>
                    <li>Data flows from parent component to component</li>
                    <li>Easier to debug</li>
                </ol>
                <h5 className='ms-3'>Uncontrolled: </h5>
                <ol type='1'>
                    <li>Managed by component's own internal state</li>
                    <li>Component updates own internal state on user interaction</li>
                    <li>Data flows within the component</li>
                </ol>
            </div>

            {/* 2nd Question */}
            <div>
                <h4>2. How to validate React props using PropTypes?</h4>
                <p>
                    To validate React props using PropTypes, We need to import the PropTypes library from the 'prop-types' package in our component file, and then define the expected data type for each prop that our component is expecting to receive.
                    Here's an example of how to use PropTypes to validate a prop: <br />
                </p>
                <img src={Que1} alt="" />
                <p className='my-3'>In the example above, we define the expected data type for each prop by calling the corresponding PropTypes function on the component's propTypes object. We also use the .isRequired property to ensure that the prop is present, and will generate a console warning if it's not.</p>
            </div>

            {/* 3rd Questions */}
            <div>
                <h4>3.Difference between nodejs and express js?</h4>
                <p>Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. It provides a platform for building server-side applications using JavaScript. Node.js comes with built-in modules such as HTTP, file system, and buffer, which makes it easy to build web applications. <br /><br />
                    Express.js is a web application framework built on top of Node.js. It provides a set of features to build web applications and APIs quickly and easily. Express.js provides an HTTP server and routing capabilities, as well as support for middleware that allows you to add functionality to your application.</p>
            </div>

            {/* 4th Questions */}
            <div>
                <h4>4.What is a custom hook, and why will you create a custom hook?</h4>
                <p>A custom hook is a reusable function in React that encapsulates a specific behavior or logic and can be shared across different components.
                    Creating a custom hook can help us to remove the duplication of code and make the codebase more readable and maintainable.
                    Custom hooks can be used to abstract away complex or repetitive code, such as handling form inputs, fetching data, or manipulating the state.

                    By creating custom hooks, we can also make our code more testable and easier to refactor, as we can isolate the logic we want to test or modify.</p>
            </div>

            <hr />
        </div>
    );
}

export default Blog;
