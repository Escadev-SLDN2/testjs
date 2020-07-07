<?php
if (isset($_POST['prenom'])) {
    echo 'Bonjour, ' . $_POST['prenom'] . ' &#128521;';
} else {
    echo 'Erreur : pas de prénom :(';
}
