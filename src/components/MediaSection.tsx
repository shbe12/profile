import type { Bio } from '../data/bio';

interface Props {
  bio: Bio;
}

export function MediaSection({ bio }: Props) {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <h2 className="mb-4">Get in Touch</h2>
        <div className="d-flex flex-wrap gap-3">
          <a
            href={bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            LinkedIn
          </a>
          <a
            href={bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-secondary"
          >
            GitHub
          </a>
          <a
            href={`mailto:${bio.email}`}
            className="btn btn-outline-secondary"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
