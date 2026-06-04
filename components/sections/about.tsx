"use client"

import Image from "next/image"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-secondary">
            <Image
              src="/hdemia/chisiamo.jpg"
              alt="HDemia Dance Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">FORMIAMO DANZATORI, ISPIRIAMO PERSONE</p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Chi Siamo
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-pretty text-foreground">
              <p>
                HDemia Dance Studio è un punto di riferimento per la formazione artistica e la crescita attraverso la danza a Sarno.
              </p>
              <p>
                La nostra missione è offrire un percorso formativo di qualità, guidando ogni allievo nello sviluppo della tecnica, dell&apos;espressività e della fiducia in sé stesso, all&apos;interno di un ambiente professionale, accogliente e stimolante.
              </p>
              <p>
                Proponiamo corsi per bambini, ragazzi e adulti, con discipline che spaziano dalla Danza Classica alla Danza Moderna e Contemporanea, dall&apos;Hip Hop al Latino Americano, fino alla Danza Aerea. Ogni percorso è studiato per valorizzare le capacità individuali e accompagnare gli allievi nel raggiungimento dei propri obiettivi artistici.
              </p>
              <p>
                Grazie all&apos;esperienza dei nostri insegnanti qualificati e alla passione che mettiamo ogni giorno nel nostro lavoro, HDemia Dance Studio è molto più di una scuola di danza: è un luogo dove talento, impegno e creatività si trasformano in crescita personale e artistica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
