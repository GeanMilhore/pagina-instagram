# Página do Instagram :camera:

### Tecnologias utilizadas: :yellow_square: JavaScript , :orange_square: HTML & :blue_square: CSS

Neste projeto implementei a tela inicial de login do Instagram, adicionando botões e imagens tradicionais com __HTML__<br> e __CSS__ além da interação com o botão __*modo noite*__ implementado através do __*JavaScript*__.

## Página com o tema light

!["light-theme"](/Instagram/Img/light-theme.png "Imagem light")

feita com __*3 divs*__, o local onde se apresentam *telefone, informações de login* e o local onde permanece o *botão* de mudança de tema.

### como resumo do HTML temos.
```
  <div class="instagram-wrapper">
>        <div class="instagram-phone"> 
         </div>
>        <div class="instagram-continue">
         </div>
>        <div class="container-btnDark">
         </div>
  </div>
```

## Página com o tema dark

!["dark-theme"](/Instagram/Img/dark-theme.png "Imagem dark")

após o clique no botão de switch acima temos a mudança de tema para o modo noite, implementado através da mundança de classes com o __*JavaScript*__, nele eu adiciono a classe de modo dark, nas parte visuais da página ( como a classe group, ou instagram-logo por exemplo ).

### parte do código JavaScript

```
tema.addEventListener('change',function(){

    for (i = 0; i < groups.length; i++){
    
        groups[i].classList.toggle('dark-group')
        
    }

```

a função __*toggle*__ em javaScript adiciona a classe caso o elemento não há possua e remove a classe caso a classe já possua, aqui colocamos o tema dark em duas divs da classe group através da variavel groups ( um array de elementos ). 

## ( Projeto implementado durante uma aula na Digital Innovation One :pencil2: ) 
