import React from 'react'
import "./Portfolio.css"
import devPortfolio1 from "../../assets/Portfolio1.png"
import Full1 from "../../assets/Full1.jpg"

import devPortfolio2 from "../../assets/Portfolio2.png"
import Full2 from "../../assets/Full2.jpg"

import devPortfolio3 from "../../assets/Portfolio3.png"
import Full3 from "../../assets/Full3.jpg"
import Full4 from "../../assets/Full4.png"
import Full5 from "../../assets/Full5.png"
import Full6 from "../../assets/Full6.png"
import devPortfolio4 from "../../assets/Portfolio4.png"
import devPortfolio5 from "../../assets/Portfolio5.png"
import devPortfolio6 from "../../assets/Portfolio6.png"
import PortfolioContent from './PortfolioContent'


export default function DevPortfolio() {
  const devPortfolios = [
    {
      id: 1,
      image: devPortfolio1,
      imageHover: Full1,
      duration: 20,
      title: "OmniFood: Everyday Healthy Meal",
      description: "Omnifood is an AI powered food subscription that will make you eat healthy again, 365 days per year. It's tailored to your personal tastes and nutritional benefits",
      techStack: [
        {
          id: 1,
          tech: 'HTML',
          color: '#E44D26'
        },
        {
          id: 2,
          tech: 'CSS',
          color: '#264EE4'
        },
      ],
      webUrl: "https://omnifoodorder.netlify.app/",
      githubLink: "https://github.com/pradipkaityuiux/Omnifood"
    },
    {
      id: 2,
      image: devPortfolio2,
      imageHover: Full2,
      duration: 20,
      title: "Traveloma - Travel without limits",
      description: "Traveloma is a website that helps in booking tickets of International Travel and Tourism places and we take care of your whole journey.",
      techStack: [
        {
          id: 1,
          tech: 'HTML',
          color: '#E44D26'
        },
        {
          id: 2,
          tech: 'CSS',
          color: '#264EE4'
        },
        {
          id: 3,
          tech: 'JavaScript',
          color: '#E9C932'
        },
      ],
      webUrl: "https://travelomago.netlify.app/",
      githubLink: "https://github.com/pradipkaityuiux/traveloma"
    },
    {
      id: 3,
      image: devPortfolio3,
      imageHover: Full3,
      duration: 5,
      title: "UIAssembly - The Only place for Web Components",
      description: "UIAssembly is a complete place for getting customised Web components like button, accordion, modal, form, table and many more to help reduce time for developing frontends.",
      techStack: [
        {
          id: 1,
          tech: 'VUE',
          color: '#41B883'
        },
        {
          id: 1,
          tech: 'VUEX',
          color: '#6FDB9E'
        },
        {
          id: 2,
          tech: 'Firebase',
          color: '#FFA713'
        },
      ],
      webUrl: "https://uiassembly.org/",
      githubLink: "https://github.com/pradipkaityuiux/uiassemblyNew"
    },
    {
      id: 4,
      image: devPortfolio4,
      imageHover: Full4,
      duration: 5,
      title: "The React Quiz App",
      description: "The React Quiz app was super helpful! It simplified state management by showing how to use the useReducer Hook instead of many useState hooks. Now, I can build more efficient React components!",
      techStack: [
        {
          id: 1,
          tech: 'React',
          color: '#00D9FE'
        },
        {
          id: 2,
          tech: 'Firebase',
          color: '#FFA713'
        },
      ],
      webUrl: "https://quizplay-react.web.app/",
      githubLink: "https://github.com/pradipkaityuiux/react-quiz"
    },
    {
      id: 5,
      image: devPortfolio5,
      imageHover: Full5,
      duration: 0,
      title: "MovieLand - Search Movies",
      description: "The MovieLand app was an exciting project for me because it helps me to understand how to fetch external data using useEffect hook and manage state update and handling errors.",
      techStack: [
        {
          id: 1,
          tech: 'React',
          color: '#00D9FE'
        },
        {
          id: 2,
          tech: 'OMDB Api',
          color: '#ff2353'
        },
      ],
      webUrl: "https://moovie-react.netlify.app/",
      githubLink: "https://github.com/pradipkaityuiux/movie-react"
    },
    {
      id: 6,
      image: devPortfolio6,
      imageHover: Full6,
      duration: 14,
      title: "DeverX Blog - Write Your Creative Dev Articles",
      description: "The DeverX Blog - helped me to understand the React Query to fetch External Data, store in cache, the Redux State management to handle various complex operations.",
      techStack: [
        {
          id: 1,
          tech: 'React',
          color: '#00D9FE'
        },
        {
          id: 2,
          tech: 'React Query',
          color: '#ff2509'
        },
        {
          id: 3,
          tech: 'Redux',
          color: '#2370ff'
        },
        {
          id: 2,
          tech: 'Firebase',
          color: '#FFA713'
        },
      ],
      webUrl: "https://deverxblog.netlify.app/",
      githubLink: "https://github.com/pradipkaityuiux/deverx"
    },
  ];
  return (
    <div className=''>
      {devPortfolios.map(portfolio => <PortfolioContent portfolio={portfolio} hasCaseStudy={false}/>)}
    </div>
  )
}
