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
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const feedbackRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (success === null && serverError === null) return;
    const el = feedbackRef.current;
    if (!el) return;
    const id = window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(id);
  }, [success, serverError]);

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-900 shadow-sm"
      noValidate
    >
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
        <div className="space-y-2">
          <Label className="text-zinc-700" htmlFor="name">Nome</Label>
          <Input
            className="border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400"
            id="name"
            autoComplete="name"
            {...form.register("name")}
          />
          {form.formState.errors.name?.message ? (
            <p className="text-sm text-red-600" role="alert">
              {form.formState.errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label className="text-zinc-700" htmlFor="email">E-mail</Label>
          <Input
            className="border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400"
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
        <Label className="text-zinc-700" htmlFor="phone">Telefone / WhatsApp (opcional)</Label>
        <Input
          className="border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400"
          id="phone"
          autoComplete="tel"
          {...form.register("phone")}
        />
        {form.formState.errors.phone?.message ? (
          <p className="text-sm text-red-600" role="alert">
            {form.formState.errors.phone.message}
          </p>
        ) : null}
      </div>
      <div className="space-y-2">
        <Label className="text-zinc-700" htmlFor="message">Mensagem</Label>
        <Textarea
          className="border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400"
          id="message"
          rows={5}
          {...form.register("message")}
        />
        {form.formState.errors.message?.message ? (
          <p className="text-sm text-red-600" role="alert">
            {form.formState.errors.message.message}
          </p>
        ) : null}
        <p className="text-xs leading-snug text-zinc-500">
          Ao enviar, você concorda com o tratamento dos dados conforme a{" "}
          <Link
            href="/privacidade"
            className="font-medium text-zinc-700 underline underline-offset-2 hover:text-zinc-900"
          >
            página de privacidade
          </Link>
          .
        </p>
      </div>

      <div
        ref={feedbackRef}
        id="contact-form-feedback"
        className="scroll-mt-32 min-h-0 outline-none"
        tabIndex={success || serverError ? -1 : undefined}
        aria-live={serverError ? "assertive" : success ? "polite" : "off"}
        aria-atomic="true"
      >
        {serverError ? (
          <p
            className="rounded-xl border-2 border-red-600 bg-red-50 px-4 py-3 text-sm font-medium text-red-900"
            role="alert"
          >
            {serverError}
          </p>
        ) : null}
        {success ? (
          <p
            className="rounded-xl border-2 border-emerald-600 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-950 shadow-sm"
            role="status"
          >
            {success}
          </p>
        ) : null}
      </div>

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
