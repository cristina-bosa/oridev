import { useEffect, useRef } from "react";
import { Link, X } from "lucide-react";

import type { Project } from "./ProjectsCarousel";
import "./dialog.css";

interface Props {
  project: Project;
  closeLabel: string;
  closeModal: () => void;
}

export default function Dialog({ project, closeLabel, closeModal }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;
    dialog.showModal();
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbar}px`;

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="dialog"
      aria-labelledby="dialog-title"
      onClose={closeModal}
      onClick={(event) => {
        if (event.target === dialogRef.current) closeModal();
      }}
    >
      <div className="dialog__content">
        <button type="button" className="dialog__close" onClick={closeModal}>
          <X size={24} aria-hidden="true" />
          <span className="sr-only">{closeLabel}</span>
        </button>
        <h2 id="dialog-title" className="dialog__title">
          {project.title}
        </h2>
        <p className="dialog__description">{project.description}</p>
        {project.url_playstore && (
          <a
            href={project.url_playstore}
            className="dialog__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link size={16} aria-hidden="true" />
            Play Store
          </a>
        )}
        {project.url_applestore && (
          <a
            href={project.url_applestore}
            className="dialog__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link size={16} aria-hidden="true" />
            App Store
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            className="dialog__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link size={16} aria-hidden="true" />
            {project.title_link || "Web"}
          </a>
        )}
      </div>
    </dialog>
  );
}
