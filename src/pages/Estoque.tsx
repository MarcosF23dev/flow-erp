import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash2, Search, Printer, RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  nome: string;
  quantidade: number;
  dataEntrada: string;
  precoUnitario: number;
  tipoUnidade: string;
  marca: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    nome: "Amortecedor Dianteiro",
    quantidade: 24,
    dataEntrada: "15/01/2026",
    precoUnitario: 385.5,
    tipoUnidade: "UN",
    marca: "Cofap",
  },
  {
    id: 2,
    nome: "Bateria 60Ah",
    quantidade: 15,
    dataEntrada: "18/01/2026",
    precoUnitario: 420.0,
    tipoUnidade: "UN",
    marca: "Moura",
  },
  {
    id: 3,
    nome: "Bomba de Combustível",
    quantidade: 8,
    dataEntrada: "12/01/2026",
    precoUnitario: 285.9,
    tipoUnidade: "UN",
    marca: "Bosch",
  },
  {
    id: 4,
    nome: "Correia Dentada",
    quantidade: 45,
    dataEntrada: "20/01/2026",
    precoUnitario: 89.9,
    tipoUnidade: "UN",
    marca: "Gates",
  },
  {
    id: 5,
    nome: "Disco de Freio",
    quantidade: 32,
    dataEntrada: "10/01/2026",
    precoUnitario: 156.5,
    tipoUnidade: "UN",
    marca: "Fremax",
  },
  {
    id: 6,
    nome: "Filtro de Ar",
    quantidade: 60,
    dataEntrada: "22/01/2026",
    precoUnitario: 45.9,
    tipoUnidade: "UN",
    marca: "Tecfil",
  },
  {
    id: 7,
    nome: "Filtro de Combustível",
    quantidade: 55,
    dataEntrada: "22/01/2026",
    precoUnitario: 38.5,
    tipoUnidade: "UN",
    marca: "Mann",
  },
  {
    id: 8,
    nome: "Filtro de Óleo",
    quantidade: 72,
    dataEntrada: "19/01/2026",
    precoUnitario: 28.9,
    tipoUnidade: "UN",
    marca: "Fram",
  },
  {
    id: 9,
    nome: "Jogo de Pastilhas de Freio",
    quantidade: 28,
    dataEntrada: "14/01/2026",
    precoUnitario: 125.0,
    tipoUnidade: "JG",
    marca: "TRW",
  },
  {
    id: 10,
    nome: "Kit de Embreagem",
    quantidade: 12,
    dataEntrada: "16/01/2026",
    precoUnitario: 580.0,
    tipoUnidade: "KIT",
    marca: "LUK",
  },
  {
    id: 11,
    nome: "Óleo Motor 5W30",
    quantidade: 120,
    dataEntrada: "21/01/2026",
    precoUnitario: 48.9,
    tipoUnidade: "L",
    marca: "Shell",
  },
  {
    id: 12,
    nome: "Palheta Limpador Parabrisa",
    quantidade: 48,
    dataEntrada: "17/01/2026",
    precoUnitario: 35.0,
    tipoUnidade: "UN",
    marca: "Bosch",
  },
  {
    id: 13,
    nome: "Radiador Completo",
    quantidade: 6,
    dataEntrada: "11/01/2026",
    precoUnitario: 685.0,
    tipoUnidade: "UN",
    marca: "Visconde",
  },
  {
    id: 14,
    nome: "Sensor de Estacionamento",
    quantidade: 18,
    dataEntrada: "13/01/2026",
    precoUnitario: 95.0,
    tipoUnidade: "UN",
    marca: "Park",
  },
  {
    id: 15,
    nome: "Vela de Ignição",
    quantidade: 96,
    dataEntrada: "23/01/2026",
    precoUnitario: 22.5,
    tipoUnidade: "UN",
    marca: "NGK",
  },
].sort((a, b) => a.nome.localeCompare(b.nome));

const Estoque = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredProducts = products.filter((product) =>
    product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.marca.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNew = () => {
    toast({
      title: "Novo Produto",
      description: "Funcionalidade de adicionar novo produto será implementada.",
    });
  };

  const handleEdit = (product: Product) => {
    toast({
      title: "Editar Produto",
      description: `Editando: ${product.nome}`,
    });
  };

  const handleDelete = (product: Product) => {
    toast({
      title: "Excluir Produto",
      description: `${product.nome} foi removido do estoque.`,
      variant: "destructive",
    });
    setProducts(products.filter((p) => p.id !== product.id));
  };

  const handlePrint = () => {
    toast({
      title: "Imprimir",
      description: "Gerando relatório de estoque...",
    });
  };

  const handleRefresh = () => {
    setProducts([...initialProducts]);
    setSearchTerm("");
    toast({
      title: "Atualizado",
      description: "Lista de produtos atualizada com sucesso!",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Controle de Estoque</h1>
        <p className="text-muted-foreground">Gestão de produtos e autopeças</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button onClick={handleNew} className="bg-primary-dark hover:bg-primary-darker">
          <Plus className="mr-2 h-4 w-4" />
          Novo
        </Button>
        <Button variant="outline" onClick={handlePrint}>
          <Printer className="mr-2 h-4 w-4" />
          Imprimir
        </Button>
        <Button variant="outline" onClick={handleRefresh}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Atualizar
        </Button>
        <div className="flex-1 min-w-[250px]">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Pesquisar produto ou marca..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-primary hover:bg-primary">
              <TableHead className="text-primary-foreground font-semibold">Nome</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Quantidade</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Data Entrada</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Preço Unitário</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Tipo Unidade</TableHead>
              <TableHead className="text-primary-foreground font-semibold">Marca</TableHead>
              <TableHead className="text-primary-foreground font-semibold text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product, index) => (
              <TableRow
                key={product.id}
                className={index % 2 === 0 ? "bg-white hover:bg-gray-50" : "bg-primary/10 hover:bg-primary/15"}
              >
                <TableCell className="font-medium">{product.nome}</TableCell>
                <TableCell>{product.quantidade}</TableCell>
                <TableCell>{product.dataEntrada}</TableCell>
                <TableCell>
                  {product.precoUnitario.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell>{product.tipoUnidade}</TableCell>
                <TableCell>{product.marca}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(product)}
                      className="hover:bg-primary/10"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(product)}
                      className="hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          Nenhum produto encontrado com "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default Estoque;
