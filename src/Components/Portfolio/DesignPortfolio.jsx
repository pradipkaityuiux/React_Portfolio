import React from 'react'
import PortfolioContent from './PortfolioContent'
import design1 from "../../assets/Design1.png"
import DesignFull1 from "../../assets/DesignFull1.jpg"

export default function DesignPortfolio() {
  const designPortfolio = [
    {
      id: 1,
      image: design1,
      imageHover: DesignFull1,
      duration: 10,
      title: "Tipto - Restaurant Menu Preview",
      description: "Tippto is an app that lets users view and filter local restaurants and their menu and route direction to visit. It allows users to call and reserve a table with their favorite dishes. User can save a restaurant for future visit.",
      techStack: [
        {
          id: 1,
          tech: 'Figma',
          color: '#A259FF'
        },
        {
          id: 2,
          tech: 'illustrator',
          color: '#FF9A00'
        },
      ],
      webUrl: "https://www.figma.com/file/ZHveXftdZjBBzZbgmkozjW/Food-app-designs-Updated?type=design&t=jWx6oXrGMjP8NIgl-6",
      githubLink: ""
    },
  ]
  return (
    <div className=''>
      {designPortfolio.map(portfolio => <PortfolioContent portfolio={portfolio} hasCaseStudy={true}/>)}
    </div>
  )
}
