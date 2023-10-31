<?php
// revoir la sécurité, faire en sorte de controler la saisie des champs...
if(isset($_POST['submit'])){
    $name = strip_tags($_POST['name']);
    $firstname = strip_tags($_POST['firstname']);
    $mailFrom = strip_tags($_POST['mail']);
    $phoneNumber = strip_tags($_POST['phone']);
    $subject = strip_tags($_POST['subject']);
    $message = strip_tags($_POST['message']);

    $mailTo = "oriane.dasilva@yahoo.fr";
    $headers = "From: Your website" . " \n" .
               "Reply To: " . $mailFrom;
    // regarder le reply to
    $txt = "Vous avez reçu un email de " . $firstname . " " . $name . " (" . $mailFrom . ", " . $phoneNumber . ").\n\n" . $message; 

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");

}