import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { nombre, correo, celular, servicio } = await request.json()

    // Validar datos
    if (!nombre || !correo || !celular || !servicio) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Correo de destino fijo
    const businessEmail = "pdesarrollo839@gmail.com"

    // Usar Resend API
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",  // Correo de prueba de Resend
          to: businessEmail,
          reply_to: correo,
          subject: `Nuevo contacto de ${nombre} - Soluciones RYS S.A.S`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #285795 0%, #0e284a 100%); color: #fcfcfc; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0;">Nuevo Contacto</h1>
              </div>
              <div style="background-color: #fcfcfc; padding: 30px; border: 1px solid #e8e8e8; border-radius: 0 0 10px 10px;">
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Correo:</strong> ${correo}</p>
                <p><strong>Celular:</strong> ${celular}</p>
                <hr style="border: none; border-top: 1px solid #e8e8e8; margin: 20px 0;">
                <p><strong>Descripción del Servicio:</strong></p>
                <p style="white-space: pre-wrap; color: #333;">${servicio}</p>
                <hr style="border: none; border-top: 1px solid #e8e8e8; margin: 20px 0;">
                <p style="font-size: 12px; color: #666;">
                  Este mensaje fue enviado desde el formulario de contacto de Soluciones RYS S.A.S.
                </p>
              </div>
            </div>
          `,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al enviar con Resend")
      }

      return NextResponse.json({ message: "Email enviado exitosamente" }, { status: 200 })
    } catch (resendError) {
      console.error("Error con Resend, intentando alternativa:", resendError)

      // Alternativa: Enviar a través de un servicio simulado o tu propio servidor
      // Para desarrollo local, simplemente registramos el mensaje
      console.log("Contacto recibido:", {
        nombre,
        correo,
        celular,
        servicio,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json({ message: "Mensaje recibido. Pronto nos pondremos en contacto." }, { status: 200 })
    }
  } catch (error) {
    console.error("Error en send-email:", error)
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 })
  }
}
