import java.util.ArrayList;
import java.util.List;

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

    public CarrinhoDeCompras() {
        itens = new ArrayList<>();
    }

    public void adicionarProduto(Produto produto) {
        itens.add(produto);
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
}

public class Main {
    public static void main(String[] args) {
        Produto produto1 = new Produto("Camiseta", 29.99);
        Produto produto2 = new Produto("Calça Jeans", 49.99);
        Produto produto3 = new Produto("Tênis", 79.99);

        CarrinhoDeCompras carrinho = new CarrinhoDeCompras();
        carrinho.adicionarProduto(produto1);
        carrinho.adicionarProduto(produto2);
        carrinho.adicionarProduto(produto3);

        carrinho.listarItens();
        System.out.println("Total: R$" + carrinho.calcularTotal());
    }
}
