import React from 'react';
import PortfolioPic from '../../images/portfoliopic.jpg';

export default function About() {
  return (
    <div>
      <h1 className='text-5xl mb-12'>About Me</h1>
      <img
        className='rounded-full h-auto w-96 ring mb-12'
        src={PortfolioPic}
        alt="Voravich Silapachairueng" />
      <p className='text-xl ml-4'>My name is Voravich Silapachairueng. I was born in Thailand, but lived
        in the United States for most of my life. I had studied Cognitive Science
        at Brown University in hopes to pursue research, but decided to change
        my course and pursue software development and computer science instead.
        Thus, I am currently enrolled at the University of Pennsylvania for an
        MCIT to become a proficient programmer! I love tabletop role-playing games,
        as I joined with the recent rise of Dungeons and Dragons. This hobby, I believe,
        encompasses my love for telling and creating stories. Programming, in a sense,
        is very similar to telling a story, as I can set the scene with objects to
        interact with and set the results of users' actions. I hope this mission statement
        will evolve into a career working in fresh, new interactive media, such as VR, AR,
        and associated technologies.
      </p>
    </div>
  );
}
