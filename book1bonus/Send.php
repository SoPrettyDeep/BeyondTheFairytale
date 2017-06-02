<?php

require '/FreshMail/RestApi.php';
require '/FreshMail/RestException.php';
require 'config.php';

$rest = new \FreshMail\RestApi();

$rest->setApiKey(FM_API_KEY);
$rest->setApiSecret(FM_API_SECRET);

$data = [
    'subscriber' => $_POST["freshmail_email"],
    'list' => 'yc5s8mm4m6'
];

try {
    $response = $rest->doRequest('mail', $data);

    echo 'Mail sent, received data: ';
    print_r($response);
    echo PHP_EOL;
} catch (Exception $e) {
    echo 'Error message: ' . $e->getMessage() . ', Error code: ' . $e->getCode() . ', HTTP code: ' . $rest->getHttpCode() . PHP_EOL;
}
