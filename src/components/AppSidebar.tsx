import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  DollarSign,
  ShoppingBag,
  Users,
  ChevronDown,
  ChevronRight,
  FileText,
  UserCog,
  Shield,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import flowLogo from "@/assets/flow-logo.png";

interface SubMenuItem {
  title: string;
  url: string;
}

interface MenuItem {
  title: string;
  url: string;
  icon: any;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  {
    title: "Cadastro",
    url: "/cadastro",
    icon: FileText,
    subItems: [
      { title: "Cliente", url: "/cadastro/cliente" },
      { title: "Fornecedor", url: "/cadastro/fornecedor" },
      { title: "Serviços", url: "/cadastro/servicos" },
      { title: "Forma de Pagamento", url: "/cadastro/forma-pagamento" },
      { title: "Condição de Pagamento", url: "/cadastro/condicao-pagamento" },
    ],
  },
  {
    title: "Financeiro",
    url: "/financeiro",
    icon: DollarSign,
    subItems: [
      { title: "Contas", url: "/financeiro/contas" },
      { title: "Fluxo de Caixa", url: "/financeiro/fluxo-caixa" },
      { title: "Conciliação Bancária", url: "/financeiro/conciliacao" },
      { title: "Lançamentos", url: "/financeiro/lancamentos" },
    ],
  },
  { title: "Vendas", url: "/vendas", icon: ShoppingCart },
  { title: "Compras", url: "/compras", icon: ShoppingBag },
  { title: "Estoque", url: "/estoque", icon: Package },
  {
    title: "Acesso e Segurança",
    url: "/acesso",
    icon: Shield,
    subItems: [
      { title: "Usuários", url: "/acesso/usuarios" },
      { title: "Permissões de Acesso", url: "/acesso/permissoes" },
    ],
  },
  { title: "Relatórios", url: "/relatorios", icon: FileText },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(["Cadastro", "Financeiro", "Acesso e Segurança"]);

  const isCollapsed = state === "collapsed";

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  const isActive = (url: string) => location.pathname === url;
  const isParentActive = (item: MenuItem) => {
    if (isActive(item.url)) return true;
    return item.subItems?.some((sub) => isActive(sub.url)) || false;
  };

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"}>
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-2">
          <img src={flowLogo} alt="Flow ERP" className={isCollapsed ? "h-8 w-8" : "h-10 w-10"} />
          {!isCollapsed && <span className="font-bold text-xl text-primary-darker">Flow ERP</span>}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <div key={item.title}>
                  <SidebarMenuItem>
                    {item.subItems ? (
                      <div>
                        <SidebarMenuButton
                          onClick={() => toggleExpanded(item.title)}
                          className={`w-full justify-between ${
                            isParentActive(item) ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            {!isCollapsed && <span>{item.title}</span>}
                          </div>
                          {!isCollapsed &&
                            (expandedItems.includes(item.title) ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            ))}
                        </SidebarMenuButton>
                        {!isCollapsed && expandedItems.includes(item.title) && (
                          <div className="ml-6 mt-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <SidebarMenuButton key={subItem.title} asChild>
                                <NavLink
                                  to={subItem.url}
                                  className="text-sm hover:bg-sidebar-accent/50"
                                  activeClassName="bg-primary/10 text-primary-darker font-medium"
                                >
                                  {subItem.title}
                                </NavLink>
                              </SidebarMenuButton>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          className="hover:bg-sidebar-accent/50"
                          activeClassName="bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        >
                          <item.icon className="h-4 w-4" />
                          {!isCollapsed && <span>{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
