import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

const services = [
  {
    id: 1,
    title: "Instalación de adoquín",
    image: "/adoquin.png",
    description:
      "Instalación profesional de adoquines para áreas peatonales, vías vehiculares, parqueaderos y zonas de alto tráfico. Utilizamos materiales de alta calidad y técnicas especializadas para garantizar durabilidad y estética.",
  },
  {
    id: 2,
    title: "Instalación de bordillo",
    image: "/bordillo.jpg",
    description:
      "Fabricación e instalación de bordillos de concreto para delimitación de andenes, separación de vías y control de aguas lluvias. Realizamos trabajos con altos estándares de calidad y precisión.",
  },
  {
    id: 3,
    title: "Fundida de muros de contención",
    image: "/muroContencion.jpg",
    description:
      "Construcción de muros de contención en concreto armado para estabilización de taludes, control de erosión y contención de tierras. Diseñamos soluciones estructurales seguras y duraderas.",
  },
  {
    id: 4,
    title: "Construcción de cerramientos",
    image: "/cerramientos.jpg",
    description:
      "Construcción de cerramientos definitivos y provisionales para proyectos residenciales, comerciales e industriales. Ofrecemos soluciones adaptadas a las necesidades específicas de cada proyecto.",
  },
  {
    id: 5,
    title: "Subestaciones eléctricas",
    image: "/subestacion.jpg",
    description:
      "Construcción de subestaciones eléctricas con los más altos estándares de seguridad y normatividad vigente. Realizamos desde el diseño hasta la puesta en marcha de la infraestructura eléctrica.",
  },
  {
    id: 6,
    title: "Pérgolas y depósitos",
    image: "/pergola.jpg",
    description:
      "Diseño y construcción de pérgolas y depósitos adaptados a las necesidades de cada cliente. Utilizamos materiales de primera calidad para garantizar durabilidad y funcionalidad.",
  },
  {
    id: 7,
    title: "Andenes en concreto",
    image: "/anden.jpg",
    description:
      "Fundida en concreto de andenes peatonales con acabados de alta calidad. Realizamos trabajos que combinan funcionalidad, accesibilidad y estética urbana.",
  },
  {
    id: 8,
    title: "Construcción de cárcamos",
    image: "/carcamo.jpg",
    description:
      "Construcción de cárcamos para sistemas de bombeo y almacenamiento de aguas. Nuestras soluciones garantizan un manejo eficiente y seguro de aguas residuales y lluvias.",
  },
  {
    id: 9,
    title: "Nichos para medidores de gas",
    image: "/nicho-gas.jpg",
    description:
      "Fabricación e instalación de nichos para medidores de gas con materiales resistentes y siguiendo todos los protocolos de seguridad. Garantizamos accesibilidad y protección para los equipos de medición."
  }
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-4 text-center">Nuestro Portafolio</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
            Descubre los servicios que ofrecemos para transformar tu negocio. Cada solución está diseñada
            específicamente para resolver tus desafíos empresariales.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
