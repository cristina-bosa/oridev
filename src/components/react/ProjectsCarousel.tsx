import {
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";


import "./projects-carousel.css";
import Dialog from "./dialog";

export type Project = {
  title: string;
  tags: string[];
  summary: string;
  description: string;
  link?: string;
  title_link?: string;
  personal: boolean;
  url_playstore?: string;
  url_applestore?: string;
};

export type CarouselLabels = {
  carousel: string;
  personal: string;
  closeDialog: string;
};

type Props = {
  projects: Project[];
  labels: CarouselLabels;
};

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function ProjectsCarousel({ projects, labels }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const middleRef = useRef<HTMLLIElement>(null);
  const untouchedRef = useRef(true);
  const [entered, setEntered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const middleIndex = Math.floor(projects.length / 2);

  const centerOnMiddle = (behavior: ScrollBehavior) => {
    const viewport = viewportRef.current;
    const middle = middleRef.current;

    if (!viewport || !middle) return;

    const box = viewport.getBoundingClientRect();
    const card = middle.getBoundingClientRect();
    const delta = card.left + card.width / 2 - (box.left + box.width / 2);

    viewport.scrollTo({ left: viewport.scrollLeft + delta, behavior });
  };

  useIsomorphicLayoutEffect(() => {
    centerOnMiddle("instant");
    setEntered(true);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (untouchedRef.current) centerOnMiddle("instant");
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <Fragment>
      <div className={`projects__carousel${entered ? " is-entered" : ""}`}>
        <div
          ref={viewportRef}
          className="projects__viewport"
          tabIndex={0}
          aria-label={labels.carousel}
          onPointerDown={() => (untouchedRef.current = false)}
        >
          <ul className="projects__track">
            {projects.map((project, index) => (
              <li
                key={project.title}
                ref={index === middleIndex ? middleRef : undefined}
                className="projects__slide"
                style={{ "--index": index } as CSSProperties}
              >
                <article
                  className="project"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project__preview" aria-hidden="true" />
                  {project.personal && (
                    <span className="project__personal">{labels.personal}</span>
                  )}
                  <div className="project__body">
                    <h3 className="project__title">{project.title}</h3>
                    <p className="project__description">{project.summary}</p>
                    <ul className="project__tags">
                      {project.tags.map((tag) => (
                        <li key={tag} className="project__tag">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {selectedProject && (
        <Dialog
          project={selectedProject}
          closeLabel={labels.closeDialog}
          closeModal={() => setSelectedProject(null)}
        />
      )}
    </Fragment>
  );
}
