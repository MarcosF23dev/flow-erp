import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ShoppingCart, DollarSign, Users } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total de Produtos",
      value: "248",
      icon: Package,
      change: "+12%",
      changeType: "positive" as const,
    },
    {
      title: "Vendas do Mês",
      value: "R$ 45.231",
      icon: ShoppingCart,
      change: "+8%",
      changeType: "positive" as const,
    },
    {
      title: "Receita Total",
      value: "R$ 128.450",
      icon: DollarSign,
      change: "+23%",
      changeType: "positive" as const,
    },
    {
      title: "Clientes Ativos",
      value: "342",
      icon: Users,
      change: "+5%",
      changeType: "positive" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Bem-vindo ao Flow ERP - 2026</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary-dark" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-green-600 mt-1">
                {stat.change} em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Visão Geral</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Sistema de gestão empresarial completo para controle de estoque, vendas, compras e
            finanças. Navegue pelo menu lateral para acessar as diferentes funcionalidades.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
