import React from 'react'
import "./Blog.css"
import Section from '../../hooks/CommonSec'
const blogs = [
    {
        id: 1,
        title: "Learn React: Difference Between JSX and HTML",
        description: "React has been developed by Facebook, and it is currently the favorite library of most of the developers. React is based on the principle of JSX (that means JavaScript XML). It means HTML with JavaScript",
        url: "https://bit.ly/48xZHDs",
        image: "bx bxl-react",
        color: "#087EA4"
    },
    {
        id: 2,
        title: "Understanding the Power of Mutability and Immutability in JavaScript: Real-life Code Examples",
        description: "In JavaScript, different data types have different behaviors and locations in memory. Some data types are mutable, meaning they ca",
        url: "https://bit.ly/4aA33ax",
        image: "bx bxl-javascript",
        color: "#e5ce35"
    },
    {
        id: 3,
        title: "Mastering Ternary Operators in JavaScript: How to Use Multiple in a Single Statement",
        description: "JavaScript is a powerful and flexible programming language that offers various ways to handle conditional logic. One of the most concise an",
        url: "https://bit.ly/4arcYPI",
        image: "bx bxl-javascript",
        color: "#e5ce35"
    },
    {
        id: 4,
        title: "The Ultimate Guide to Understanding Switch Cases in JavaScript",
        description: "Switch cases are a way of performing different actions based on different conditions in JavaScript. Instead of writing multiple if-else",
        url: "https://bit.ly/4awrQwm",
        image: "bx bxl-javascript",
        color: "#e5ce35"
    },
    {
        id: 5,
        title: "Mastering JavaScript Collections: The Ultimate Guide to Sets and Maps",
        description: "JavaScript is a powerful programming language that can handle various types of data. However, sometimes the built-in data structures such a",
        url: "https://bit.ly/3RDdwt7",
        image: "bx bxl-javascript",
        color: "#e5ce35"
    },
    {
        id: 6,
        title: "Destructuring in JavaScript: A Comprehensive Guide with Coding Examples",
        description: "Destructuring is a JavaScript feature that allows you to extract multiple values from an array or an object and assign them to variables in a",
        url: "https://bit.ly/4aCd72Q",
        image: "bx bxl-javascript",
        color: "#e5ce35"
    },
]
function Blog() {
  return (
    <Section className="skills section" id="blog">
        <h2 className="section__title">Blog</h2>
        <span className="section__subtitle">Technical Blog Articles</span>

        <div className="blog__container container grid">
            {blogs.map(blog => <div key={blog.id} className='blog__content'>
                <h3>{blog.title}</h3>
                <p>{blog.description.substring(0, 120)}...</p>
                <a href={blog.url} target='_blank'>Read More <i class='bx bx-link-external'></i></a>
                <span className='logo'><i className={blog.image} style={{color: blog.color}}></i></span>
            </div>)}
        </div>
        <div className='all__blogs'>
            <a href="https://medium.com/@pradipkaity" target='_blank' className="button button--flex">Visit My Blog</a>
        </div>
    </Section>
  )
}

export default Blog