<?php
if (isset($_POST['prenom'])) {
    echo 'Bonjour, ' . $_POST['prenom'];
} else {
    echo 'Erreur : pas de prénom :(';
}
