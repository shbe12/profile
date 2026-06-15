import type { Project } from '../data/projects';
import { Card, Badge } from 'react-bootstrap';

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    <Card className="project-card h-100">
      {project.imageUrl && (
        <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
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
      </Card.Body>
    </Card>
  );
}
