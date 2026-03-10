import { Mail, MessageCircle, Instagram, Facebook } from "lucide-react";

const AurineLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g stroke="hsl(var(--primary))" strokeWidth="6" strokeLinecap="round" fill="none">
      <circle cx="200" cy="200" r="100" />
      <ellipse cx="200" cy="200" rx="100" ry="38" />
      <ellipse cx="200" cy="200" rx="38" ry="100" />
      <ellipse
        cx="200"
        cy="200"
        rx="140"
        ry="42"
        transform="rotate(-25 200 200)"
        strokeWidth="5"
      />
    </g>
  </svg>
);

const MetaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a4.892 4.892 0 0 0 1.12 2.15c.55.586 1.3.928 2.196.928 1.027 0 1.932-.442 2.784-1.196.852-.755 1.681-1.853 2.546-3.312l1.37-2.314.308-.528c.655-1.12 1.391-2.048 2.252-2.764.86-.715 1.888-1.112 3.08-1.112 1.732 0 3.153.85 4.17 2.322 1.018 1.472 1.564 3.455 1.564 5.853 0 1.38-.238 2.58-.713 3.544-.474.963-1.124 1.691-1.93 2.163-.807.473-1.712.71-2.69.71h-.556v-2.96h.556c.656 0 1.186-.195 1.605-.582.42-.387.74-.954.95-1.7.21-.747.316-1.648.316-2.695 0-1.76-.353-3.164-1.055-4.152-.703-.988-1.63-1.503-2.817-1.503-.82 0-1.543.303-2.186.894-.643.59-1.27 1.452-1.907 2.594l-.398.682-1.37 2.315c-.788 1.333-1.572 2.393-2.368 3.168-.795.775-1.678 1.32-2.66 1.618-.49.149-1.018.224-1.58.224-1.222 0-2.305-.372-3.183-1.12-.879-.749-1.546-1.78-1.94-3.083C.122 16.32 0 15.442 0 14.449c0-2.835.778-5.787 2.23-8.003C3.68 4.233 5.432 3.07 7.403 3.07c1.39 0 2.573.547 3.584 1.576 1.012 1.03 1.878 2.508 2.645 4.417l-.906.657c-.704-1.756-1.482-3.084-2.342-3.955-.86-.872-1.826-1.332-2.95-1.332h-.001l-.518-.4Z" />
  </svg>
);

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/[0.04] blur-[150px]" />
        <div className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[120px]" />
        {/* Subtle floating social icons as background texture */}
        <div className="absolute left-[8%] top-[15%] opacity-[0.04]">
          <Instagram className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute right-[12%] top-[20%] opacity-[0.04]">
          <Facebook className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute left-[15%] bottom-[25%] opacity-[0.04]">
          <MetaIcon className="h-14 w-14 text-primary" />
        </div>
        <div className="absolute right-[8%] bottom-[18%] opacity-[0.04]">
          <Instagram className="h-10 w-10 text-primary" />
        </div>
        <div className="absolute left-[45%] top-[8%] opacity-[0.03]">
          <MetaIcon className="h-10 w-10 text-primary" />
        </div>
        <div className="absolute right-[30%] bottom-[10%] opacity-[0.03]">
          <Facebook className="h-8 w-8 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <AurineLogo className="mb-8 h-28 w-28 opacity-90" />

        <h1 className="mb-1 text-5xl font-extralight tracking-[0.2em] text-foreground sm:text-6xl">
          AURINE
        </h1>

        <div className="my-5 flex items-center gap-4">
          <div className="h-px w-10 bg-primary/25" />
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary/80">
            Meta Ads &middot; Beauty
          </p>
          <div className="h-px w-10 bg-primary/25" />
        </div>

        <p className="max-w-sm text-[13px] leading-relaxed text-muted-foreground">
          Nasza strona przechodzi metamorfozę. Pracujemy nad czymś wyjątkowym
          specjalnie dla Ciebie. Przepraszamy za wszelkie niedogodności
          i&nbsp;zapraszamy do kontaktu.
        </p>

        {/* Single subtle CTA row */}
        <div className="mt-8 flex items-center gap-5">
          <a
            href="mailto:kontakt@aurine.pl"
            className="group rounded-full border border-primary/15 p-3 text-primary/60 transition-all hover:border-primary/30 hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-[18px] w-[18px] transition-transform group-hover:-translate-y-0.5" />
          </a>
          <a
            href="https://wa.me/48731856524"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full border border-primary/15 p-3 text-primary/60 transition-all hover:border-primary/30 hover:text-primary"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-[18px] w-[18px] transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
          © 2026 Aurine
        </span>
        <span className="text-[9px] tracking-[0.15em] text-muted-foreground/25">
          powered by aurine
        </span>
      </div>
    </div>
  );
};

export default Index;
