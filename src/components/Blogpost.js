import React from 'react'
import img1 from '../img/photo.jpg'


const Blogpost = () => {

  return (
    <section className="blog">
      <div className="item">
          <img src={img1} alt="" className="home-img" /> 
          </div> 
          <div className="text">
            <h3>BADREDDINE</h3>
            <h2><a href =''>NOS EXPERTS</a></h2>
          </div>
          <div className="home-content">
            <h2>EXPERT EN FACILITIES & WORKPLACE MANAGEMENT </h2>
            <p>
              Expert en Facilities et Workplace Management, avec une large expérience
              dans l'imobilier , l'externalisation, le pilotage de projects,le gestion 
              de changement et la conseil auprés de grands groupes et dans des environnements internationaux.
            </p>
            <br/>
            <p>
              Expertise dans les différents métiers autour de l'environement de travail
              comme l'exploitation, la maintenance, les services aux occupants,HSE ,la 
              technologie , l'ousourcing, etc.. une large expérience dans
              l'implémentation et la gestion de contrats globaux en FM la conduite du 
              changement , la mise en place de stratégies , l'optimisation des opérations des couts et des services;
              la pilotage de projects d'aménagements
              d'espace de travail et de démenagements.
              A un excellent relationnel , une agilité et une capacité a travailler en équipe
              et dans des conditions de stress, Et une trés bonne communication.
            </p>
          </div>
          <div className="arrow"></div>
            <div className="logo"></div>
          <div className="content"></div>
    </section>
  )
}

export default Blogpost
