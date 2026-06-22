import './App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { bio } from './data/bio'
import { skills } from './data/skills'
import { projects } from './data/projects'
import { HeroSection } from './components/HeroSection'
import { ProjectCard } from './components/ProjectCard'
import { SkillsSection } from './components/SkillsSection'
import { MediaSection } from './components/MediaSection'

function App() {
  const featuredProject = projects.find(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <main>
      <HeroSection bio={bio} />

      <Container>
        <section id="projects" className="py-5">
          <h2 className="mb-4">Projects</h2>
          {featuredProject && (
            <Row className="g-4 mb-4">
              <Col xs={12}>
                <ProjectCard project={featuredProject} />
              </Col>
            </Row>
          )}
          <Row xs={1} md={2} className="g-4">
            {otherProjects.map(project => (
              <Col key={project.id}>
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </section>

        <section id="skills" className="py-5 border-top">
          <h2 className="mb-4">Skills</h2>
          <SkillsSection skills={skills} />
        </section>
      </Container>

      <MediaSection bio={bio} />

      <footer className="text-center py-4 border-top">
        <small style={{ color: 'var(--text)' }}>
          &copy; {new Date().getFullYear()} {bio.name}
        </small>
      </footer>
    </main>
  )
}

export default App
