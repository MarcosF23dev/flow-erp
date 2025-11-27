import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Estoque from "./pages/Estoque";
import Vendas from "./pages/Vendas";
import UnderConstruction from "./pages/UnderConstruction";
import DashboardLayout from "./components/DashboardLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/vendas"
            element={
              <DashboardLayout>
                <Vendas />
              </DashboardLayout>
            }
          />
          <Route
            path="/estoque"
            element={
              <DashboardLayout>
                <Estoque />
              </DashboardLayout>
            }
          />
          <Route
            path="/compras"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/favoritos"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/relatorios"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/cadastro/cliente"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/cadastro/fornecedor"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/cadastro/servicos"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/cadastro/forma-pagamento"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/cadastro/condicao-pagamento"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/financeiro/contas"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/financeiro/fluxo-caixa"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/financeiro/conciliacao-bancaria"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/financeiro/lancamentos"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/acesso/usuarios"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          <Route
            path="/acesso/permissoes"
            element={
              <DashboardLayout>
                <UnderConstruction />
              </DashboardLayout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
