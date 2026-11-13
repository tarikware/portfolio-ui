import PropTypes from 'prop-types';
import SectionHeader from '../components/SectionHeader';

function formatDate(dateStr) {
  if (!dateStr) return 'Present';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' }).toUpperCase();
}

function ExperienceCard({ exp }) {
  const hasMultipleRoles = Array.isArray(exp.roles) && exp.roles.length > 0;

  if (hasMultipleRoles) {
    return (
      <div className="timeline-item">
        <div style={{ marginBottom: '8px' }}>
          <div className="timeline-item__company" style={{ fontSize: 'clamp(0.85rem, 2vw, 1.05rem)', marginBottom: '8px' }}>
            {exp.company}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {exp.roles.map((r) => (
              <div
                key={r.title}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                  gap: '8px',
                  paddingLeft: '8px',
                  borderLeft: '2px solid var(--pip-green-border)'
                }}
              >
                <div className="timeline-item__role" style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.15rem)' }}>
                  {r.title}
                </div>
                <div className="timeline-item__meta">
                  <span className="timeline-item__date">
                    {formatDate(r.startDate)} — {r.currentJob ? <span className="badge-current">ACTIVE</span> : formatDate(r.endDate)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {exp.location && (
          <div style={{ marginBottom: '8px' }}>
            <span className="timeline-item__location">◉ {exp.location}</span>
          </div>
        )}

        {exp.bullets && exp.bullets.length > 0 && (
          <ul className="timeline-item__bullets" aria-label={`Responsibilities at ${exp.company}`}>
            {exp.bullets.map(b => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className="timeline-item">
      <div className="timeline-item__header">
        <div>
          <div className="timeline-item__role">{exp.role}</div>
          <div className="timeline-item__company">{exp.company}</div>
        </div>
        <div className="timeline-item__meta">
          <span className="timeline-item__date">
            {formatDate(exp.startDate)} — {exp.currentJob ? <span className="badge-current">ACTIVE</span> : formatDate(exp.endDate)}
          </span>
          {exp.location && (
            <span className="timeline-item__location">◉ {exp.location}</span>
          )}
        </div>
      </div>

      {exp.bullets && exp.bullets.length > 0 && (
        <ul className="timeline-item__bullets" aria-label={`Responsibilities at ${exp.company}`}>
          {exp.bullets.map(b => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

ExperienceCard.propTypes = {
  exp: PropTypes.shape({
    id: PropTypes.number,
    role: PropTypes.string,
    company: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    currentJob: PropTypes.bool,
    location: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      currentJob: PropTypes.bool,
    })),
    bullets: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default function ExperiencePage({ experiences }) {
  if (!experiences?.length) return (
    <div style={{ color: 'var(--pip-green-dim)', fontSize: '0.8rem' }}>
      &gt; NO_DATA_FOUND — connect to database to load records.
    </div>
  );

  return (
    <div className="screen-enter">
      <SectionHeader title="Work History" />
      <div className="timeline">
        {experiences.map(exp => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </div>
  );
}

ExperiencePage.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};
