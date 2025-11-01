"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ContactModal } from "./contact-modal"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={100} height={150}/>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="/#acerca-de" className="text-foreground hover:text-primary transition-colors">
                Acerca de nosotros
              </Link>
              <Link href="/portafolio" className="text-foreground hover:text-primary transition-colors">
                Portafolio
              </Link>
              <Link href="/#casos-exito" className="text-foreground hover:text-primary transition-colors">
                Casos de éxito
              </Link>
              <button
                onClick={() => setIsContactOpen(true)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all"
              >
                Contáctanos
              </button>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-2">
              <Link href="/" className="text-foreground hover:text-primary transition-colors py-2">
                Inicio
              </Link>
              <Link href="/#acerca-de" className="text-foreground hover:text-primary transition-colors py-2">
                Acerca de nosotros
              </Link>
              <Link href="/portafolio" className="text-foreground hover:text-primary transition-colors py-2">
                Portafolio
              </Link>
              <Link href="/#casos-exito" className="text-foreground hover:text-primary transition-colors py-2">
                Casos de éxito
              </Link>
              <button
                onClick={() => {
                  setIsContactOpen(true)
                  setIsOpen(false)
                }}
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all"
              >
                Contáctanos
              </button>
            </nav>
          )}
        </div>
      </header>

      <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  )
}
