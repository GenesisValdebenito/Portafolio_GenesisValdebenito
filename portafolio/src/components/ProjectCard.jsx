export default function ProjectCard({ project }) {
  const { Icon } = project;

  return (
    <article className="card">
      <div className="titleblock">
        <div>Estado<b>{project.status}</b></div>
        <div>Rol<b>{project.role}</b></div>
        <div>Proyecto<b>{project.title}</b></div>
        <div>Contexto<b>{project.context}</b></div>
      </div>
      <div className="art" aria-hidden="true"><Icon /></div>
      <div className="card-body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tags" aria-label="Tecnologías">
          {project.tags.map((tag) => (
            <span className={`tag${tag.highlight ? " role" : ""}`} key={tag.label}>{tag.label}</span>
          ))}
        </div>
        {project.links.length > 0 ? (
          <div className="card-links">
            {project.links.map((link) => (
              <a href={link.href} key={link.href} rel="noreferrer" target="_blank">{link.label} →</a>
            ))}
          </div>
        ) : <span className="noLink">{project.noLinkText}</span>}
      </div>
    </article>
  );
}
