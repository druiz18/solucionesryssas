import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Carousel } from "@/components/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      

      {/* Hero Carousel */}
      <div className="pt-4 px-4">
        <Carousel />
      </div>

      <div className="pt-4 px-4">
        <h2 className="text-4xl text-foreground mb-6 mt-6 text-center italic">
          &quot;Donde cada proyecto es un paso para un mundo mejor&quot;
        </h2>
      </div>

      {/* Acerca de Nosotros */}
      <section id="acerca-de" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/quienesSomos.jpg"
                alt="Equipo de trabajo"
                width={800}
                height={384}
                className="rounded-lg shadow-lg object-cover h-96 w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                ¿Quienes Somos?
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Soluciones R.Y.S S.A.S. es una empresa constituida en el año
                2019 por el señor José Pineda, quien se desempeñó como Oficial
                durante diez (10) años en el sector del urbanismo. Durante ese
                tiempo, adquirió los conocimientos técnicos y administrativos
                necesarios para conformar su propia empresa en el ámbito de la
                construcción.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La compañía inició sus actividades con un equipo reducido de dos
                trabajadores, desarrollando proyectos por contrato. Gracias a su
                compromiso, eficiencia y calidad en la ejecución, logró
                posicionarse favorablemente en el sector, lo que permitió
                ampliar progresivamente su portafolio de clientes y aumentar la
                cantidad de colaboradores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section id="mision-vision" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Misión y Visión
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="text-5xl text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-12"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nuestra Misión
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Diseñar y desarrollar espacios urbanos innovadores, sostenibles
                y funcionales, mejorando la calidad de vida de las personas y
                promoviendo un crecimiento ordenado, eficiente y respetuoso con
                el medio ambiente.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-card p-8 rounded-lg shadow-lg">
              <div className="text-5xl text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-12"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="21.17" y1="8" x2="12" y2="8"></line>
                  <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                  <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nuestra Visión
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Para el año 2030 ser líder en urbanismo y desarrollo sostenible,
                destacándose por su impacto positivo en la planificación y
                transformación de proyectos, construyendo bienestar social y
                equilibrio ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section id="casos-exito" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Casos de Éxito
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case 1 */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/caso1.jpg"
                alt="Caso de éxito 1"
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Urbanización Los Almendros – Cota, Cundinamarca
                </h3>
                <p className="text-muted-foreground mb-4">
                  Servicio de instalación de adoquines y bordillos.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Exteriores
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Construcción
                  </span>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/caso2.jpg"
                alt="Caso de éxito 2"
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Residencia Familiar – Chía, Cundinamarca
                </h3>
                <p className="text-muted-foreground mb-4">
                  Servicio de instalación de pergola.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Exteriores
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Cubierta
                  </span>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/caso3.jpg"
                alt="Caso de éxito 3"
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Aceras
                </h3>
                <p className="text-muted-foreground mb-4">
                  Servicio de instalación de aceras.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Exteriores
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Alto tráfico
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
