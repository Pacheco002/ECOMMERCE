import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Produto {
    private String nome;
    private double preco;

    public Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }
}

class CarrinhoDeCompras {
    private List<Produto> itens;
    private List<Compra> historico;

    public CarrinhoDeCompras() {
        itens = new ArrayList<>();
        historico = new ArrayList<>();
    }

    public void adicionarProduto(Produto produto) {
        itens.add(produto);
    }

    public void removerProduto(String nome) {
        for (int i = 0; i < itens.size(); i++) {
            Produto produto = itens.get(i);
            if (produto.getNome().equalsIgnoreCase(nome)) {
                itens.remove(i);
                System.out.println(nome + " foi removido do carrinho.");
                return;
            }
        }
        System.out.println("Produto não encontrado no carrinho.");
    }

    public void listarItens() {
        System.out.println("Itens no carrinho:");
        for (Produto produto : itens) {
            System.out.println(produto.getNome() + " - R$" + produto.getPreco());
        }
    }

    public double calcularTotal() {
        double total = 0;
        for (Produto produto : itens) {
            total += produto.getPreco();
        }
        return total;
    }

    public void finalizarCompra() {
        if (!itens.isEmpty()) {
            historico.add(new Compra(itens, calcularTotal()));
            itens.clear();
            System.out.println("Compra finalizada. Itens adicionados ao histórico.");
        } else {
            System.out.println("Nenhum item no carrinho para finalizar a compra.");
        }
    }

    public void exibirHistorico() {
        if (!historico.isEmpty()) {
            System.out.println("Histórico de Compras:");
            for (Compra compra : historico) {
                System.out.println("Data da Compra: " + compra.getData());
                compra.listarItens();
                System.out.println("Total: R$" + compra.getTotal());
                System.out.println();
            }
        } else {
            System.out.println("Nenhum histórico de compras disponível.");
        }
    }
}

class Compra {
    private List<Produto> itens;
    private double total;
    private String data;

    public Compra(List<Produto> itens, double total) {
        this.itens = new ArrayList<>(itens);
        this.total = total;
        this.data = java.time.LocalDate.now().toString();
    }

    public List<Produto> getItens() {
        return itens;
    }

    public double getTotal() {
        return total;
    }

    public String getData() {
        return data;
    }

    public void listarItens() {
        System.out.println("Itens da Compra:");
        for (Produto produto : itens) {
            System.out.println(produto.getNome() + " - R$" + produto.getPreco());
        }
    }
}

public class Main {
    public static void main(String[] args) {
        CarrinhoDeCompras carrinho = new CarrinhoDeCompras();

        Scanner scanner = new Scanner(System.in);
        int opcao;

        do {
            System.out.println("Menu:");
            System.out.println("1. Adicionar Produto");
            System.out.println("2. Remover Produto");
            System.out.println("3. Listar Itens no Carrinho");
            System.out.println("4. Finalizar Compra");
            System.out.println("5. Exibir Histórico de Compras");
            System.out.println("6. Sair");
            System.out.print("Escolha uma opção: ");
            opcao = scanner.nextInt();

            switch (opcao) {
                case 1:
                    System.out.print("Digite o nome do produto: ");
                    String nomeProduto = scanner.next();
                    System.out.print("Digite o preço do produto: ");
                    double precoProduto = scanner.nextDouble();
                    carrinho.adicionarProduto(new Produto(nomeProduto, precoProduto));
                    break;
                case 2:
                    System.out.print("Digite o nome do produto a ser removido do carrinho: ");
                    String nomeRemover = scanner.next();
                    carrinho.removerProduto(nomeRemover);
                    break;
                case 3:
                    carrinho.listarItens();
                    break;
                case 4:
                    carrinho.finalizarCompra();
                    break;
                case 5:
                    carrinho.exibirHistorico();
                    break;
                case 6:
                    System.out.println("Saindo...");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        } while (opcao != 6);

        scanner.close();
    }
}
