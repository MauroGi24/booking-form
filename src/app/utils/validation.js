import { z } from "zod"

export const bookingSchema = z.object({
  nome: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  cognome: z.string().min(2, "Il cognome deve contenere almeno 2 caratteri"),
  telefono: z.string().regex(/^[+]?[\d\s-()]+$/, "Numero di telefono non valido"),
  email: z.string().email("Email non valida"),
  sitoWeb: z.string().url("URL non valido").optional().or(z.literal("")),
  data: z.date({
    required_error: "Seleziona una data per l'appuntamento",
  }),
  orario: z.string().min(1, "Seleziona un orario"),
})
