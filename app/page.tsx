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

      {/* Acerca de Nosotros */}
      <section id="acerca-de" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/modern-office-with-blue-theme.jpg"
                alt="Equipo de trabajo"
                width={800}
                height={384}
                className="rounded-lg shadow-lg object-cover h-96 w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Acerca de Nosotros
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Somos una empresa dedicada a transformar ideas en soluciones
                digitales innovadoras. Con más de 10 años de experiencia, hemos
                ayudado a cientos de empresas a alcanzar sus objetivos a través
                de tecnología de punta.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestro equipo de expertos trabaja sin descanso para garantizar
                que cada proyecto sea una obra maestra. Nos comprometemos con la
                excelencia, la innovación y la satisfacción del cliente.
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
                src="/technology-business-success.jpg"
                alt="Caso de éxito 1"
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Transformación Digital Empresarial
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implementamos una solución integral que aumentó la
                  productividad en un 45% y redujo costos operacionales.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Consultoría
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Tecnología
                  </span>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/team-collaboration-workspace.png"
                alt="Caso de éxito 2"
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Platform de Colaboración
                </h3>
                <p className="text-muted-foreground mb-4">
                  Desarrollamos una plataforma que permitió a más de 500
                  empleados colaborar eficientemente desde cualquier ubicación.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Desarrollo
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    SaaS
                  </span>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Image
                src="/modern-office-with-blue-theme.jpg"
                alt="Caso de éxito 3"
                width={400}
                height={192}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Automatización Inteligente
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implementamos sistemas de automatización que redujeron tiempos
                  de procesamiento en un 60% y errores en un 80%.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Automatización
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    IA
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
