"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
// définir le schéma de validation pour un utilisateur
exports.userValidation = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Le nom est requis" }), // une string de minimum 1 caractère
    email: zod_1.z
        .string()
        .email({ message: "Adresse email invalide" })
        .refine((email) => {
        return email !== "shrek@swamp.de";
    }), // on attends une adresse email bien formatée
    password: zod_1.z
        .string()
        .min(20, { message: "Le mot de passe doit faire au moins 20 caractères" })
        .regex(/[0-9]/, {
        message: "Le mot de passe doit contenir au moins un chiffre",
    })
        .regex(/[!@$#^&(),.?^":|<>{}]/, {
        message: "Le mot de passe doit contenir au moins un symbole",
    }),
});
