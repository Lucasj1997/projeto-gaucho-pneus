"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  type ContactFormValues,
  type ContactPayload,
} from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const form = useForm<ContactFormValues, unknown, ContactPayload>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "onTouched",
  });

  async function onSubmit(values: ContactPayload) {
    setServerError(null);
    setSuccess(null);
    try {
      const res = await fetch("/api/v1/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
        retryAfter?: number;
      };
      if (!res.ok) {
        if (res.status === 429) {
          setServerError(
            `Aguarde ${data.retryAfter ?? 60}s antes de enviar outra mensagem.`,
          );
          return;
        }
        setServerError(data.error ?? "Não foi possível enviar. Tente novamente.");
        return;
      }
      setSuccess(data.message ?? "Mensagem enviada com sucesso.");
      form.reset(defaultValues);
    } catch {
      setServerError("Erro de rede. Verifique sua conexão.");
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
      noValidate
    >
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" autoComplete="name" {...form.register("name")} />
          {form.formState.errors.name?.message ? (
            <p className="text-sm text-red-600" role="alert">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...form.register("email")}
          />
          {form.formState.errors.email?.message ? (
            <p className="text-sm text-red-600" role="alert">
              {form.formState.errors.email.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefone / WhatsApp (opcional)</Label>
        <Input id="phone" autoComplete="tel" {...form.register("phone")} />
        {form.formState.errors.phone?.message ? (
          <p className="text-sm text-red-600" role="alert">
            {form.formState.errors.phone.message}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" rows={5} {...form.register("message")} />
        {form.formState.errors.message?.message ? (
          <p className="text-sm text-red-600" role="alert">
            {form.formState.errors.message.message}
          </p>
        ) : null}
      </div>

      {serverError ? (
        <p className="text-sm text-red-600" role="alert">
          {serverError}
        </p>
      ) : null}
      {success ? (
        <p className="text-sm text-emerald-700" role="status">
          {success}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="rounded-full bg-black text-white hover:bg-zinc-900"
      >
        {form.formState.isSubmitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
            Enviando…
          </>
        ) : (
          "Enviar mensagem"
        )}
      </Button>
    </form>
  );
}
