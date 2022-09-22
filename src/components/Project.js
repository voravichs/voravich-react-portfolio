import React from 'react';
import GitHubLogo from '../images/GitHub-Mark.png'

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Project(props) {
  return (
    <li className='ring-4 rounded'>
      <a href={props.link}>
        <figure className="group relative ">
          <img className='transition duration-200 group-hover:opacity-30 group-hover:blur-sm' src={props.image} alt={props.name} />
          <figcaption className="p-12 absolute top-0 text-6xl hidden group-hover:block"> {props.name}</figcaption>
          <object>
            <a href={props.gitLink}>
              <img className='w-24 h-24 xl:w-36 xl:h-36 absolute bottom-16 right-12 hidden group-hover:block' src={GitHubLogo} alt="github logo" />
            </a>
          </object>
        </figure>
      </a>
    </li >
  );
}

export default Project;
