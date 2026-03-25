import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome")
    .max(100, "Nome muito longo")
    .regex(/^[^<>{}[\]]*$/, "Caracteres não permitidos"),
  email: z.string().trim().email("E-mail inválido").max(254),
  phone: z
    .string()
    .trim()
    .refine(
      (v) => v.length === 0 || /^[\d\s()+.-]{10,20}$/.test(v),
      "Telefone inválido",
    )
    .transform((v) => (v.length === 0 ? undefined : v)),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem muito curta")
    .max(2000, "Mensagem muito longa")
    .regex(/^[^<>]*$/, "Remova tags ou caracteres especiais"),
});

export type ContactFormValues = z.input<typeof contactSchema>;
export type ContactPayload = z.output<typeof contactSchema>;
