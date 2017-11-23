
<?php

header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
var_dump ($request);
?>
