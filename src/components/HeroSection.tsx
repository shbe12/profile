import type { Bio } from '../data/bio';
import { Container, Row, Col } from 'react-bootstrap';
import profileImg from '../assets/profile.jpg';

interface Props {
  bio: Bio;
}

export function HeroSection({ bio }: Props) {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center g-4">
          <Col xs={12} md="auto" className="text-center">
            <img
              src={profileImg}
              alt={bio.name}
              className="profile-photo rounded-circle"
            />
          </Col>
          <Col className="text-center text-md-start">
            <h1>{bio.name}</h1>
            <p className="lead fw-semibold mb-1">{bio.title}</p>
            <p className="text-muted mb-3">{bio.tagline}</p>
            {bio.description.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p className="small text-muted mb-1">📍 {bio.location}</p>
            <p className="small text-muted mb-1">🎓 {bio.education}</p>
            <p className="small text-muted">🌐 {bio.languages}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
