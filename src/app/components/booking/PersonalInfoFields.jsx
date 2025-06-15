'use client'

import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const PersonalInfoFields = () => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome *</Label>
          <Input
            id="nome"
            placeholder="Il tuo nome"
            {...register("nome")}
          />
          {errors.nome && (
            <p className="text-sm text-red-600">{errors.nome.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cognome">Cognome *</Label>
          <Input
            id="cognome"
            placeholder="Il tuo cognome"
            {...register("cognome")}
          />
          {errors.cognome && (
            <p className="text-sm text-red-600">{errors.cognome.message}</p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="telefono">Numero di Telefono *</Label>
          <Input
            id="telefono"
            placeholder="+39 123 456 7890"
            {...register("telefono")}
          />
          {errors.telefono && (
            <p className="text-sm text-red-600">{errors.telefono.message}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="tua@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="sitoWeb">Sito Web (opzionale)</Label>
        <Input
          id="sitoWeb"
          placeholder="https://www.tuosito.com"
          {...register("sitoWeb")}
        />
        {errors.sitoWeb && (
          <p className="text-sm text-red-600">{errors.sitoWeb.message}</p>
        )}
      </div>
    </>
  )
}

export default PersonalInfoFields
