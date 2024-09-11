import { z } from "zod";

// définir le schéma de validation pour un utilisateur
export const userValidation = z.object({
  name: z.string().min(1, { message: "Le nom est requis" }), // une string de minimum 1 caractère
  email: z
    .string()
    .email({ message: "Adresse email invalide" })
    .refine((email): boolean => {
      return email !== "shrek@swamp.de";
    }), // on attends une adresse email bien formatée
  password: z
    .string()
    .min(20, { message: "Le mot de passe doit faire au moins 20 caractères" })
    .regex(/[0-9]/, {
      message: "Le mot de passe doit contenir au moins un chiffre",
    })
    .regex(/[!@$#^&(),.?^":|<>{}]/, {
      message: "Le mot de passe doit contenir au moins un symbole",
    }),
});
