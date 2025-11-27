import { useState } from "react";
import { Search, Plus, Edit, Trash2, Printer, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Venda {
  id: number;
  cliente: string;
  dataVenda: string;
  valorTotal: number;
  vendedor: string;
}

const vendasIniciais: Venda[] = [
  {
    id: 1,
    cliente: "Auto Mecânica Silva",
    dataVenda: "2026-01-15",
    valorTotal: 2450.00,
    vendedor: "João Santos"
  },
  {
    id: 2,
    cliente: "Oficina do Zé",
    dataVenda: "2026-01-18",
    valorTotal: 1890.50,
    vendedor: "Maria Oliveira"
  },
  {
    id: 3,
    cliente: "Posto Estrela",
    dataVenda: "2026-01-20",
    valorTotal: 3200.00,
    vendedor: "João Santos"
  },
  {
    id: 4,
    cliente: "Retífica Moderna",
    dataVenda: "2026-01-22",
    valorTotal: 4750.00,
    vendedor: "Carlos Mendes"
  },
  {
    id: 5,
    cliente: "Auto Peças Centro",
    dataVenda: "2026-01-25",
    valorTotal: 1560.00,
    vendedor: "Maria Oliveira"
  },
  {
    id: 6,
    cliente: "Mecânica Express",
    dataVenda: "2026-01-28",
    valorTotal: 2980.00,
    vendedor: "João Santos"
  },
  {
    id: 7,
    cliente: "Garage Premium",
    dataVenda: "2026-02-01",
    valorTotal: 5420.00,
    vendedor: "Carlos Mendes"
  },
  {
    id: 8,
    cliente: "Oficina Rápida",
    dataVenda: "2026-02-05",
    valorTotal: 1230.00,
    vendedor: "Maria Oliveira"
  },
  {
    id: 9,
    cliente: "Auto Center Norte",
    dataVenda: "2026-02-08",
    valorTotal: 3890.00,
    vendedor: "João Santos"
  },
  {
    id: 10,
    cliente: "Mecânica do Bairro",
    dataVenda: "2026-02-12",
    valorTotal: 2150.00,
    vendedor: "Carlos Mendes"
  }
];

const Vendas = () => {
  const [vendas, setVendas] = useState<Venda[]>(
    [...vendasIniciais].sort((a, b) => 
      new Date(b.dataVenda).getTime() - new Date(a.dataVenda).getTime()
    )
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVendas = vendas.filter((venda) =>
    venda.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venda.vendedor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Vendas</h1>
        <p className="text-muted-foreground">Gerenciamento de vendas realizadas</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Novo
        </Button>
        <Button variant="outline" className="gap-2">
          <Edit className="h-4 w-4" />
          Alterar
        </Button>
        <Button variant="outline" className="gap-2">
          <Trash2 className="h-4 w-4" />
          Excluir
        </Button>
        <Button variant="outline" className="gap-2">
          <Printer className="h-4 w-4" />
          Imprimir
        </Button>
        <Button variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Atualizar
        </Button>
      </div>

      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Pesquisar por cliente ou vendedor..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary/10 hover:bg-primary/10">
              <TableHead className="font-bold text-primary">Cliente</TableHead>
              <TableHead className="font-bold text-primary">Data Venda</TableHead>
              <TableHead className="font-bold text-primary">Valor Total</TableHead>
              <TableHead className="font-bold text-primary">Vendedor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVendas.map((venda, index) => (
              <TableRow
                key={venda.id}
                className={index % 2 === 0 ? "bg-background" : "bg-primary/5"}
              >
                <TableCell className="font-medium">{venda.cliente}</TableCell>
                <TableCell>{formatDate(venda.dataVenda)}</TableCell>
                <TableCell className="font-semibold text-primary">
                  {formatCurrency(venda.valorTotal)}
                </TableCell>
                <TableCell>{venda.vendedor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredVendas.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          Nenhuma venda encontrada
        </p>
      )}
    </div>
  );
};

export default Vendas;
