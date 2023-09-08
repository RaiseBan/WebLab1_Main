<?php
$start_time = microtime();
if ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $response = '';
    $out = '';
    $x = $_GET['x'];
    $y = $_GET['y'];
    $r = $_GET['r'];

    if ((($x * $x + $y * $y) <= $r * $r / 4 && $x <= 0 && $y >= 0) ||
        (-2 * $y - $x <= $r  && $x <= 0 && $y <= 0) ||
        ($x >= 0 && $y <= 0 && $x <= (-1) * $r / 2 && $y >= (-1) * $r)) {
        $out = "Входит";
    } else {
        $out = "Не входит";
    }
    $response .= $x;
    $response .= ';';
    $response .= $y;
    $response .= ';';
    $response .= $r;
    $response .= ';';
    $response .= $out;
    $response .= ';';
    $response .= date("Y-m-d H:i:s");
    $response .= ';';
    $response .= $start_time;
    $response .= '/';
    echo $response;


}