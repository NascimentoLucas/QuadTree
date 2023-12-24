# QuadTree
Projeto criado para ajudar o entendimento de quadtree. O programa tem dois comportamentos: Horse Mode e Quadtreemode. No horse mode todos os boids testam colisão com todos os outros, isso ocorre através de dois loops for. Já no quadtreemode é usado a quadtree para gerenciar os boids dentro da tree, e assim, só testar boids q estejam na mesma folha.



# Dicas
* Veja os arquivos [HorseMode.js]([url](https://github.com/NascimentoLucas/QuadTree/blob/master/Javascript/Modes/HorseMode.js)https://github.com/NascimentoLucas/QuadTree/blob/master/Javascript/Modes/HorseMode.js) e [QuadTreeMode.js]([url](https://github.com/NascimentoLucas/QuadTree/blob/master/Javascript/Modes/QuadTreeMode.js)https://github.com/NascimentoLucas/QuadTree/blob/master/Javascript/Modes/QuadTreeMode.js) para entender melhor o fluxo de criação e execução dos boids.
* Para implementação própria indico que :
  * Primeiro implemente o boid com as seguintes "mecânicas":
    * Draw (ele se desenhar na tela)
    * Movimentação
    * Colisão com outros boids
  * Implemente o Horse mode, ou seja, dois loops onde todos os boids checam colisão com todos os outros boids e, claro, se movendo pela tela.  
  * Entenda bem antes de começar a implementação:
    * o conceito de raiz e folha
    * que a classe quadtree tem dois comportamentos: sem folha e com folha.
  * Implemente para quadtree se desenhar corretamente.
  * Implemente a adição de boids a quadtree.
    * No começo deixe os seus boids em posições especificas e parados, assim fica melhor checar se a quadtree está realmente se dividindo corretamente.
  * Crie um método para checar se a quadtree está no modo sem folha e com folha.
    * Se você deixar isso em uma variável booleana (verdadeira ou falso) aumenta a chance dessa informação não ser corretamente atualizada.
  * Implemente a remoção de boids da quadtree.
    * Aqui de novo vale limitar a movimentação dos boids para facilitar o debug, como: reduzir velocidade, limitar a velocidade a um eixo.
