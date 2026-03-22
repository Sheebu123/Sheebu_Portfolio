export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Sheebu Tiwari. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <a
            href="https://github.com/Sheebu123"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sheebu-tiwari/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sheebutiwari222@gmail.com"
            className="transition hover:text-primary"
          >
            sheebutiwari222@gmail.com
          </a>
          <a
            href="tel:+917683017986"
            className="transition hover:text-primary"
          >
            +91 7683017986
          </a>
        </div>
      </div>
    </footer>
  );
}
