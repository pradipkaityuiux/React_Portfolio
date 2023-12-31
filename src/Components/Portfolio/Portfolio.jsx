import React, { useEffect } from 'react'
import "./Portfolio.css"
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`
const Input = styled.input.attrs(props => ({type: "radio"}))`
    visibility: hidden;
    opacity: 0;
    display: none;
`
const Label = styled.label`
    font-size: 1.6rem;
    cursor: pointer;
    padding-top: 3px;
    &>i{
        color: #272727;
        z-index: 10;
        position: relative;
    }
`
const Toggle = styled.div`
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 0 0.8rem;
    &::before{
        content: "";
        position: absolute;
        background-color: #e9e9e9;
        width: 5.4rem;
        height: 2.4rem;
        z-index: -1;
        left: 4px;
        top: 0;
        border-radius: 2rem;
    }
`

function Portfolio() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <section className="skills section section_portfolio" id="portfolio">
        <Header>
            <h2 className="">Portfolio</h2>
            <Toggle className='toggle'>
                <Input name="name" id="dev"/>
                <Label htmlFor="dev" onClick={()=> navigate('development')}><i class='bx bx-code-alt'></i></Label>
                <Input name="name" id="design"/>
                <Label htmlFor="design"  onClick={()=> navigate('uxdesign')}><i class='bx bx-palette'></i></Label>
                <span class="glider"></span>
            </Toggle>
        </Header>


        <div className="portfolio__container">
            <Outlet/>
        </div>
    </section>
  )
}

export default Portfolio