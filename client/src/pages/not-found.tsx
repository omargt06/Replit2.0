import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md shadow-xl border-slate-200">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-bold text-slate-900">Página no encontrada</h1>
          </div>
          
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            Por favor, verifica la dirección o vuelve al inicio.
          </p>

          <div className="mt-8">
             <Link href="/">
               <Button className="w-full font-semibold gap-2">
                 <ArrowLeft className="w-4 h-4" />
                 Volver al Inicio
               </Button>
             </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
