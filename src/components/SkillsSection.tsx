import type { Skill } from '../data/skills';
import { Badge } from 'react-bootstrap';

interface Props {
  skills: Skill[];
}

const CATEGORY_LABELS: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  ai: 'AI & LLMs',
  tools: 'Tools & Platforms',
  realtime: 'Realtime',
};

const CATEGORY_ORDER: Skill['category'][] = [
  'frontend',
  'backend',
  'ai',
  'tools',
  'realtime',
];

export function SkillsSection({ skills }: Props) {
  return (
    <>
      {CATEGORY_ORDER.map(category => {
        const group = skills.filter(s => s.category === category);
        if (group.length === 0) return null;
        return (
          <div key={category} className="mb-4">
            <h6
              className="text-uppercase text-muted mb-2"
              style={{ letterSpacing: '0.06em', fontSize: '0.75rem' }}
            >
              {CATEGORY_LABELS[category]}
            </h6>
            <div className="d-flex flex-wrap gap-2">
              {group.map(skill => (
                <Badge key={skill.name} className="skill-badge">
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
