import { useEffect, useRef } from "react";
import { X } from "lucide-react";

import type { Project } from "./ProjectsCarousel";
import "./dialog.css";

interface Props {
  project: Project;
  closeModal: () => void;
}

export default function Dialog({ project, closeModal }: Props) {
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
        <button
          type="button"
          className="dialog__close"
          onClick={closeModal}
        >
          <X size={24} aria-hidden="true" />
          <span className="sr-only">Close dialog</span>
        </button>
        <h2 id="dialog-title" className="dialog__title">
          {project.title}
        </h2>
        <p className="dialog__description">{project.description}</p>
        <a
          href={project.link}
          className="dialog__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acceder
        </a>
      </div>
    </dialog>
  );
}
