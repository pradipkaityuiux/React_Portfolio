import React, { useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components';

const generateWidthAnimation = (width) => keyframes`
  from {width: 0;}
  to {width: ${width}%;}
`;
const AnimatedDiv = styled.div`
  ${(props) =>
    css`
      animation: ${generateWidthAnimation(props.width)} 3s ease-in-out forwards;
    `}
`;
function Backend() {
    useEffect(() => {
        const targetElements = document.querySelectorAll('.progress-value');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.8,
        };
        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // Add a class for additional styling/animation
                observer.unobserve(entry.target);
            }
            });
        };
        const observer = new IntersectionObserver(handleIntersection, options);
        targetElements.forEach((element) => {
            observer.observe(element);
        });
        return () => {
            targetElements.forEach((element) => {
            observer.unobserve(element);
            });
        };
    }, []);
    const skills = [
        {
            id: 1,
            skill: 'HTML & CSS',
            percent: 90
        },
        {
            id: 2,
            skill: 'Javascript',
            percent: 70
        },
        {
            id: 3,
            skill: 'Tailwind',
            percent: 80
        },
        {
            id: 4,
            skill: 'Styled components',
            percent: 90
        },
        {
            id: 5,
            skill: 'React',
            percent: 80
        },
        {
            id: 6,
            skill: 'VUE',
            percent: 76
        },
        {
            id: 7,
            skill: 'Jquery',
            percent: 85
        },
        {
            id: 8,
            skill: 'Github',
            percent: 65
        },
        // {
        //     id: 9,
        //     skill: 'Next Js',
        //     percent: 85
        // },
        {
            id: 10,
            skill: 'UI Design',
            percent: 88
        },
    ]
    return (
        <div className="skills__content">
            <div className="skills__box">
                <div className="progress-box">
                    {skills.map(skill => <div className="progress" key={skill.id}>
                        <p>{skill.skill}<span>({skill.percent}%)</span></p>
                        <AnimatedDiv width={skill.percent} className='progress-value'></AnimatedDiv>
                    </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Backend