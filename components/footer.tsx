"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactModal } from "./contact-modal"

export function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Empresa Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Soluciones RYS S.A.S</h3>
              <p className="opacity-90">
                Donde cada proyecto es un paso para un mundo mejor
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 opacity-90">
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <a href="tel:+3108568427" className="hover:underline">
                    (310) 856-8427
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} />
                  <a href="mailto:solucionesryssas@gmail.com" className="hover:underline">
                    solucionesryssas@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Avenida 9 No. 180 - 12, Cota, Cundinamarca</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col justify-start">
              <h4 className="text-lg font-semibold mb-4">¿Necesitas ayuda?</h4>
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-6 py-2 bg-background text-primary rounded-lg hover:bg-opacity-90 transition-all font-semibold w-fit"
              >
                Contáctanos
              </button>
            </div>
          </div>

          <div className="border-t border-primary-foreground/30 pt-8 text-center opacity-75">
            <p>&copy; 2025 Soluciones RYS S.A.S. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  )
}
