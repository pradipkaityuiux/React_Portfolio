import React from 'react'
import { PortfolioContainer, Content, ImageContainer, Title, Description, Image, ImageHover, ChipsContainer, Chips, LinkContainer, StyledLink, Github, Book, Casestudy } from './CommonStyles'
import MyLearningPopup from './MyLearningPopup'
import "./Portfolio.css"

export default function PortfolioContent({portfolio, hasCaseStudy}) {
  const myLearning = [
    {
      id: 1,
      learning:[
        "I grasped the <span>fundamentals of HTML</span>, understanding how to create the backbone structure of a static website. From defining headers and paragraphs to incorporating lists and forms, I learned to build a solid foundation for any web project.",
        "Delving into <span>Cascading Style Sheets (CSS)</span>, I acquired the skills to style each element precisely. This involved using common styles for a cohesive look and feel across the website. I became adept at leveraging CSS for layout, ensuring a visually appealing and well-organized structure.",
        "Learning the art of dividing a webpage into distinct sections, I gained insights into creating a seamless flow. This not only contributes to a better user experience but also enhances the overall aesthetics of the website.",
        "Understanding the importance of catering to diverse devices, I implemented responsive <span>design principles</span> . This involved creating a website that adapts seamlessly to different screen sizes, ensuring optimal user experience whether accessed from a desktop, tablet, or smartphone.",
        "Exploring the creative side of web development, I acquired the skills to add small yet impactful <span>animations</span>. These animations contribute to a dynamic and engaging user interface, making the website more interactive and visually appealing.",
        " I honed the ability to optimize images for fast loading, striking a balance between quality and performance. This skill is crucial for ensuring that the website remains <span>efficient and user-friendly</span>, even in low-bandwidth scenarios."
      ]
    },
    {
      id: 2,
      learning:[
        "Crafting this project enabled me to proficiently build static websites utilizing the dynamic trio of HTML, CSS, and JavaScript. I not only gained a solid understanding of their individual roles but also learned to seamlessly integrate them for a cohesive web experience.",
        "Delving into the intricacies of <span>webpage architecture</span>, I mastered the art of organizing content into different sections. This skill enhances user navigation and contributes to a well-organized, user-friendly interface.",
        "Understanding the significance of a consistent and visually appealing design, I became adept at applying common styles across the website. This not only ensures a professional look but also establishes a coherent <span>visual identity</span>.",
        "The project emphasized the importance of <span>responsiveness</span>. I honed my skills to create websites that adapt effortlessly to diverse screen sizes, ensuring optimal user experience across devices, from desktops to smartphones.",
        "Exploring the creative side of web development, I discovered the power of small <span>animations</span>. These subtle yet impactful additions contribute to a dynamic and engaging user interface, elevating the overall user experience.",
        "Leveraging JavaScript, I gained the ability to create <span>interactive form modals</span>. This not only enhances user engagement but also provides a modern and seamless way to gather information from website visitors.",
        "Exploring the <span>Intersection Observer API</span>, I delved into efficient ways of handling scroll-based events. This not only contributes to a smoother user experience but also allows for more sophisticated and responsive website behaviors."
      ]
    },
    {
      id: 3,
      learning:[
        "Constructing this project provided a comprehensive understanding of building well-structured <span>Vue.js single-page applications (SPAs)</span>. I acquired the skills to organize components efficiently, ensuring a modular and maintainable codebase.",
        "I successfully implemented <span>Vue Router</span> to navigate seamlessly between different pages within the SPA. This dynamic routing capability enhances the user experience by allowing smooth transitions between application views.",
        "Leveraging Vue's component-based architecture, I learned the art of passing props to facilitate the flow of data between parent and child components. This ensured a streamlined approach to <span>managing and manipulating data</span> across various parts of the application.",
        "Exploring the robust features of Firebase, I integrated <span>Firebase Authentication</span> into the Vue.js application. This allowed for secure user authentication, enhancing the project's overall security and user management.",
        "I harnessed the power of <span>Firebase Firestore</span> to seamlessly fetch and display dynamic data within the Vue.js components. This real-time database interaction not only enhances the user experience but also ensures that the application remains responsive to changes in the backend.",
        "I implemented functionality to enable users to <span>save and manage several components</span> within their profiles. This personalized user experience enhances engagement and allows users to customize their interaction with the application."
      ]
    },
    {
      id: 4,
      learning:[
        "I'm now a pro at creating <span>single-page applications (SPAs)</span> using React! This means I can craft websites that load once and then update smoothly as you navigate, making for a super snappy experience. ⚡️",
        "I've got the <span>useReducer hook</span> down pat, which means I can effortlessly manage complex data in my apps and keep everything in perfect sync with what you see on this project. ‍♀️",
        "I've learned when it's best to reach for useReducer instead of useState to <span>handle data effectively</span>. It's all about choosing the right approach for each situation!",
        "I can now build apps that let you click around and explore different pages without any jarring reloads, making for a super <span>intuitive and user-friendly experience.</span> ✨",
      ]
    },
  ]
  return (
    <PortfolioContainer className='portfolio_container'>
        <ImageContainer className='imageContent'>
          <Image src={portfolio.image} alt="" draggable='false' className='imageTop'/>
          <ImageHover src={portfolio.imageHover} alt="" duration={portfolio.duration} className='imageHover'/>
        </ImageContainer>
        <Content>
          <Title>{portfolio.title}</Title>
          <Description>{portfolio.description}</Description>
          <ChipsContainer>{portfolio.techStack.map(tech => <Chips style={{backgroundColor: tech.color}}>{tech.tech}</Chips>)}</ChipsContainer>
          <LinkContainer>
            {!hasCaseStudy ? <StyledLink href={portfolio.webUrl} target='_blank'>View Website<i class='bx bx-link-external'></i></StyledLink> : <Casestudy as='a'>Case Study</Casestudy>}
            {portfolio.githubLink !='' ? <Github href={portfolio.githubLink} target='_blank'><i class='bx bxl-github'></i></Github> : null}
            {/* {!hasCaseStudy ? <Book><i class='bx bx-book-bookmark'></i></Book> : <Book><i class='bx bx-link-external'></i></Book>} */}
            {!hasCaseStudy ? <MyLearningPopup content={myLearning[portfolio.id-1]}/> : <Book><i class='bx bx-link-external'></i></Book>}
          </LinkContainer>
        </Content>
      </PortfolioContainer>
  )
}
