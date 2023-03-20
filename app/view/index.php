<?php
    include("config/cabecalho.php");
?>

<a href="https://api.whatsapp.com/send?phone=5518988015273" target="_blank" rel="noopener noreferrer" class="whatsapp-button">
    <button id="whats" class="btn btn-success">WhatsApp <i class="fa-brands fa-whatsapp"></i></button>
</a>

<header class="topo">
    <img src="img/logo.png" alt="Logo">
    <nav>
        <a href="#delicias"><button type="button" class="btn btn-outline-danger">Nossas delicias</button></a>
    </nav>
</header>

<main class="conteudo">
    <section class="banner">
        <div class="owl-carousel owl-theme">
            <div class="pImagem"></div>
            <div class="sImagem"></div>
            <div class="tImagem"></div>
        </div>
    </section>
    <section class="nossas-delicias" id="delicias">
        <h2><i class="fa-solid fa-diamond"></i> Nossas <strong>Delicias</strong> <i class="fa-solid fa-diamond"></i></h2>
        <div class="nossasDelic">
            <div><img src="img/nossasDelicias.png" alt=""></div>
            <div><img src="img/nossasDelicias2.png" alt=""></div>
            <div><img src="img/nossasDelicias3.png" alt=""></div>
            <div><img src="img/nossasDelicias4.png" alt=""></div>
        </div>
    </section>
    <div>
        <button class="btn btn-danger">Ver todas as delicias...</button>
    </div>
</main>

<footer class="rodape">
    <h2>Tudo é bom, se for feito com chocolate!</h2>
    <p>CONTATE-NOS:</p>
    <div class="instagram">
        <a href="http://" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram"></i>
            <p>@sanches.brownie</p>
        </a>
    </div>
</footer>

<?php
    include("config/rodape.php");
?>