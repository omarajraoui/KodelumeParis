import React from 'react';

function CardProject({ project, className = "" }) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-kodelume-gray-100 ${className}`}>
      {project.image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      
      <h3 className="text-xl font-heading font-bold text-kodelume-blue mb-3 hover:text-kodelume-yellow transition-colors">
        {project.title}
      </h3>
      
      <div className="font-body text-kodelume-gray-600 leading-relaxed mb-4">
        {typeof project.content === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        ) : (
          <p>{project.description || project.content}</p>
        )}
      </div>
      
      {project.technologies && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-kodelume-yellow/20 text-kodelume-dark text-xs font-body font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      
      {project.link && (
        <div className="flex items-center text-kodelume-blue hover:text-kodelume-yellow transition-colors cursor-pointer">
          <span className="text-sm font-body font-medium">Voir le projet</span>
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default CardProject;
