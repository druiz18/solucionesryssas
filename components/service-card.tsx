"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

export function ServiceCard({ title, image, description }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105">
        <div className="h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={192}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            Ver descripción
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Description Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card p-6 border-b border-border flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">{title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground text-3xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={800}
                height={256}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {description}
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
