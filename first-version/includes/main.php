<main><?php

include __DIR__ . '/../../db/data.php'; 

foreach ($arr_disc as $disc) { ?>
    <div class="card-container">
        <div class="cover" style="background-image: url('<?= $disc['poster']?>')">
        </div>
        <h2><?= $disc['title'] ?></h3>
        <p><?= $disc['author'] ?></p>
        <p><?= $disc['year'] ?></p>
        <p><?= $disc['genre'] ?></p>

    </div><?php
}?>

</main>