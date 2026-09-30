import Image from "next/image";

const navLinks = [
  { href: "#acerca", label: "Acerca" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#clientes", label: "Clientes" },
  { href: "#contacto", label: "Contacto" },
];

const servicios = [
  {
    titulo: "Ecología y Reciclaje",
    descripcion:
      "Implementamos campañas de reciclaje y educación ambiental para promover el cuidado de las zonas verdes.",
    imagen: "/Ecología y Reciclaje.jpg",
  },
  {
    titulo: "Bienestar Emocional",
    descripcion:
      "Organizamos actividades lúdicas y talleres para mejorar el ánimo y la salud mental de los estudiantes.",
    imagen: "/Bienestar Emocional.jpg",
  },
  {
    titulo: "Actividades Competitivas",
    descripcion:
      "Fomentamos competencias y concursos para incentivar la participación y unión entre estudiantes.",
    imagen: "/Actividades Competitivas.jpg",
  },
];

const ideas = [
  {
    numero: "01",
    titulo: "Canasta de botellas recicladas",
    descripcion:
      "Crear una canasta hecha de botellas recicladas para arrojar las botellas plásticas que se desocupen en las meriendas, etc.",
  },
  {
    numero: "02",
    titulo: "Venta y reciclaje",
    descripcion:
      "Con las botellas que se recojan, se van a vender a algún establecimiento de reciclaje y con el dinero recolectado se pueden hacer actividades lúdicas para ayudar a subir el ánimo a los estudiantes que estén tristes y deprimidos.",
  },
  {
    numero: "03",
    titulo: "Actividades y carteles",
    descripcion:
      "Realizar actividades competitivas, carteles sobre el estado emocional, etc.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-sage-light/30 bg-background/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight text-forest">
            Ecología Verde y Emocional
          </span>
          <ul className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-forest"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden bg-forest py-24 md:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sage blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-terracotta blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Ecología Verde y Emocional
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sage-light md:text-xl">
              Ayudamos las zonas verdes de nuestra institución educativa
              mientras promovemos el bienestar emocional de nuestros
              estudiantes.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#acerca"
                className="rounded-full bg-terracotta px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-light hover:text-forest"
              >
                Conocer más
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-sage-light/40 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </section>

        <section id="acerca" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
                  Acerca de nosotros
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest md:text-4xl">
                  Nuestro proyecto
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                  Nuestro proyecto es para ayudar las zonas verdes de nuestra
                  institución educativa. Creemos que cuidar el medio ambiente y
                  cuidar nuestra salud emocional van de la mano.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                  A través del reciclaje, la educación ambiental y actividades
                  lúdicas, buscamos crear un impacto positivo en nuestra
                  comunidad estudiantil.
                </p>
              </div>
              <div className="rounded-2xl bg-cream p-8 md:p-10">
                <h3 className="text-xl font-semibold text-forest">
                  Nuestra misión
                </h3>
                <p className="mt-4 leading-relaxed text-foreground/80">
                  Transformar botellas plásticas en recursos para actividades
                  que mejoren el ánimo y la salud mental de los estudiantes,
                  mientras mantenemos verdes y limpias las zonas de nuestra
                  institución.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-light text-forest">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3c-4 4-7 7-7 11a7 7 0 0 0 14 0c0-4-3-7-7-11Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Reciclar</p>
                    <p className="text-sm text-foreground/60">
                      Botellas plásticas
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-light text-terracotta">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 12C19 16.5 12 21 12 21Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-forest">Conectar</p>
                    <p className="text-sm text-foreground/60">
                      Bienestar emocional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
                Qué hacemos
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest md:text-4xl">
                Nuestros Servicios
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
                Ofrecemos soluciones para mejorar el entorno y bienestar
                estudiantil.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {servicios.map((servicio) => (
                <div
                  key={servicio.titulo}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold text-forest">
                      {servicio.titulo}
                    </h3>
                    <p className="mt-3 leading-relaxed text-foreground/70">
                      {servicio.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portafolio" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
                Nuestras ideas
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest md:text-4xl">
                Portafolio
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-foreground/70">
                Nuestro proyecto es para ayudar las zonas verdes de nuestra
                institución educativa. Estas son nuestras ideas:
              </p>
            </div>
            <div className="mt-16 space-y-8">
              {ideas.map((idea) => (
                <div
                  key={idea.numero}
                  className="flex flex-col gap-6 rounded-2xl border border-sage-light/30 bg-white p-8 md:flex-row md:items-start md:gap-10"
                >
                  <span className="text-5xl font-bold text-sage-light md:text-6xl">
                    {idea.numero}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-forest">
                      {idea.titulo}
                    </h3>
                    <p className="mt-3 leading-relaxed text-foreground/70">
                      {idea.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clientes" className="bg-forest py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-widest text-terracotta-light">
                  Nuestros Clientes
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Trabajamos para tener un buen bienestar emocional y también
                  reciclar.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-sage-light">
                  Nuestra comunidad estudiantil es el centro de todo lo que
                  hacemos. Cada canasta, cada actividad y cada cartel está
                  pensado para ellos.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
                  <p className="text-4xl font-bold text-white">100%</p>
                  <p className="mt-2 text-sm text-sage-light">
                    Compromiso ambiental
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
                  <p className="text-4xl font-bold text-white">100%</p>
                  <p className="mt-2 text-sm text-sage-light">
                    Bienestar emocional
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
                  <p className="text-4xl font-bold text-white">1</p>
                  <p className="mt-2 text-sm text-sage-light">
                    Comunidad unida
                  </p>
                </div>
                <div className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur-sm">
                  <p className="text-4xl font-bold text-white">∞</p>
                  <p className="mt-2 text-sm text-sage-light">
                    Ganas de ayudar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl bg-cream p-10 text-center md:p-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-terracotta">
                Contact Us
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-forest md:text-4xl">
                ¿Quieres participar?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/70">
                Si estás interesado en unirte a nuestras actividades de
                reciclaje o bienestar emocional, contáctanos.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:ecologiaverde@institucion.edu"
                  className="rounded-full bg-forest px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-forest-light"
                >
                  Enviar correo
                </a>
                <a
                  href="#acerca"
                  className="rounded-full border border-forest/20 px-8 py-3 text-sm font-semibold text-forest transition-colors hover:bg-forest/5"
                >
                  Volver arriba
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-sage-light/30 bg-cream py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <span className="text-lg font-semibold tracking-tight text-forest">
              Ecología Verde y Emocional
            </span>
            <p className="text-sm text-foreground/60">
              Cuidamos el planeta y nuestras emociones
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
