import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";

type FormValues = z.infer<typeof insertInquirySchema>;

export function ContactForm() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-medium">Nombre Completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Tu nombre" 
                    {...field} 
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-colors h-12 rounded-lg" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-medium">Teléfono</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="+34 600 000 000" 
                    {...field} 
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-colors h-12 rounded-lg" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-medium">Correo Electrónico</FormLabel>
              <FormControl>
                <Input 
                  placeholder="ejemplo@correo.com" 
                  type="email" 
                  {...field} 
                  className="bg-slate-50 border-slate-200 focus:bg-white transition-colors h-12 rounded-lg" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-medium">Mensaje</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="¿En qué podemos ayudarte?" 
                  {...field} 
                  className="bg-slate-50 border-slate-200 focus:bg-white transition-colors min-h-[120px] resize-none rounded-lg" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={isPending}
          className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          {isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar Mensaje
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
