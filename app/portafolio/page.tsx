import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

const services = [
  {
    id: 1,
    title: "Desarrollo Web Personalizado",
    image: "/desarrollo-web-personalizado.jpg",
    description:
      "Creamos sitios web a medida utilizando las tecnologías más modernas. Desde aplicaciones estáticas hasta complejos sistemas dinámicos, nos adaptamos a tus necesidades. Nuestro equipo se especializa en React, Next.js, Vue.js y otras tecnologías de vanguardia.",
  },
  {
    id: 2,
    title: "Aplicaciones Móviles",
    image: "/aplicaciones-moviles-desarrollo.jpg",
    description:
      "Desarrollamos aplicaciones móviles nativas y multiplataforma para iOS y Android. Utilizamos React Native y Flutter para garantizar rendimiento óptimo y experiencia de usuario excepcional en cualquier dispositivo.",
  },
  {
    id: 3,
    title: "E-commerce y Tiendas Online",
    image: "/tienda-online-ecommerce.png",
    description:
      "Diseñamos y desarrollamos plataformas de comercio electrónico seguras y escalables. Integramos pasarelas de pago, sistemas de inventario y análisis avanzados para impulsar tus ventas.",
  },
  {
    id: 4,
    title: "Consultoría Digital",
    image: "/consultor-a-digital-estrategia.jpg",
    description:
      "Ofrecemos consultoría estratégica para transformar tu negocio digitalmente. Ayudamos a identificar oportunidades, optimizar procesos y seleccionar las mejores soluciones tecnológicas para tu empresa.",
  },
  {
    id: 5,
    title: "Cloud y Infraestructura",
    image: "/cloud-infrastructure-servicios.jpg",
    description:
      "Implementamos soluciones cloud robustas utilizando AWS, Google Cloud y Azure. Garantizamos escalabilidad, seguridad y disponibilidad 24/7 para tus aplicaciones críticas.",
  },
  {
    id: 6,
    title: "Inteligencia Artificial",
    image: "/inteligencia-artificial-machine-learning.jpg",
    description:
      "Desarrollamos soluciones basadas en IA y Machine Learning para automatizar procesos y generar insights valiosos. Desde chatbots inteligentes hasta sistemas predictivos complejos.",
  },
  {
    id: 7,
    title: "Seguridad y Auditoría IT",
    image: "/seguridad-ciberseguridad-auditor-a.jpg",
    description:
      "Realizamos auditorías de seguridad completas y implementamos medidas de protección de datos. Garantizamos el cumplimiento de normativas como GDPR, HIPAA y estándares internacionales de seguridad.",
  },
  {
    id: 8,
    title: "Diseño UX/UI",
    image: "/dise-o-ux-ui-interfaz-usuario.jpg",
    description:
      "Creamos interfaces hermosas, intuitivas y funcionales. Nuestro equipo de diseñadores sigue las mejores prácticas de UX/UI para garantizar una experiencia de usuario excepcional.",
  },
  {
    id: 9,
    title: "Mantenimiento y Soporte",
    image: "/mantenimiento-soporte-t-cnico.jpg",
    description:
      "Ofrecemos servicios de mantenimiento preventivo, soporte técnico 24/7 y actualizaciones continuas. Nos encargamos de que tus sistemas funcionen sin interrupciones.",
  },
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
