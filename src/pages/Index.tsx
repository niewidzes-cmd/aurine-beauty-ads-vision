import { Mail, MessageCircle } from "lucide-react";

const AurineLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 480 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g stroke="hsl(var(--primary))" strokeWidth="10" strokeLinecap="round" fill="none">
      {/* Globe circle */}
      <circle cx="240" cy="240" r="150" />
      {/* Horizontal ellipse */}
      <ellipse cx="240" cy="240" rx="150" ry="55" />
      {/* Vertical ellipse */}
      <ellipse cx="240" cy="240" rx="55" ry="150" />
      {/* Ring / orbit — centered on globe */}
      <ellipse
        cx="240"
        cy="240"
        rx="200"
        ry="65"
        transform="rotate(-25 240 240)"
      />
    </g>
  </svg>
);

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      {/* Glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0">
        <div className="h-[300px] w-[300px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <AurineLogo className="mb-10 h-32 w-32 opacity-90" />

        <h1 className="mb-1 text-5xl font-extralight tracking-[0.2em] text-foreground sm:text-6xl">
          AURINE
        </h1>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px w-12 bg-primary/30" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Meta Ads · Beauty
          </p>
          <div className="h-px w-12 bg-primary/30" />
        </div>

        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Nasza strona przechodzi metamorfozę — pracujemy nad czymś wyjątkowym.
          Przepraszamy za wszelkie niedogodności. W&nbsp;międzyczasie zapraszamy
          do kontaktu — chętnie odpowiemy na każde pytanie.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="mailto:kontakt@aurine.pl"
            className="group flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-7 py-3.5 text-sm font-medium text-primary transition-all hover:border-primary/40 hover:bg-primary/10"
          >
            <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            kontakt@aurine.pl
          </a>
          <a
            href="https://wa.me/48731856524"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full border border-green-500/20 bg-green-500/5 px-7 py-3.5 text-sm font-medium text-green-400 transition-all hover:border-green-500/40 hover:bg-green-500/10"
          >
            <MessageCircle className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-8 flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
          © 2025 Aurine
        </span>
        <span className="text-[9px] tracking-[0.15em] text-muted-foreground/25">
          powered by aurine
        </span>
      </div>
    </div>
  );
};

export default Index;
