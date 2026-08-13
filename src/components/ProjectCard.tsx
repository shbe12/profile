import type { Project } from '../data/projects';
import { Card, Badge } from 'react-bootstrap';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const linkUrl = project.demoUrl ?? project.repoUrl;

  return (
    <Card className={`project-card h-100 ${project.featured ? 'featured-card' : ''}`}>
      {project.imageUrl && (
        linkUrl ? (
          <a href={linkUrl} target="_blank" rel="noopener noreferrer">
            <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
          </a>
        ) : (
          <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
        )
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex align-items-center flex-wrap gap-2">
          {project.title}
          {project.featured && <Badge bg="success">Primary Project</Badge>}
          {project.teamProject && <Badge bg="secondary">Team Project</Badge>}
        </Card.Title>
        {project.dateRange && (
          <div className="text-muted small mb-2">{project.dateRange}</div>
        )}
        <Card.Text>{project.description}</Card.Text>
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-3">
            {project.highlights.map(point => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <div className="d-flex flex-wrap gap-1 mb-3">
          {project.techStack.map(tech => (
            <Badge key={tech} className="skill-badge">{tech}</Badge>
          ))}
        </div>
        <div className="mt-auto d-flex gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              View Repo
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-secondary btn-sm"
            >
              Live Demo
            </a>
          )}
        </div>
        {project.demoNote && (
          <div className="text-muted small mt-2">{project.demoNote}</div>
        )}
      </Card.Body>
    </Card>
  );
}
