<?php
$start_time = microtime();
$flag = true;
if ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $response = '';
    $res = '';
    $x = $_GET['x'];
    $y = $_GET['y'];
    $r = $_GET['r'];

    if ($x < -4 || $x > 4)
        $flag = false;
    if ($y < -3 || $y > 3)
        $flag = false;
    if ($r < 1 || $r > 5)
        $flag = false;

    if ($flag){
        if ((($x * $x + $y * $y) <= $r * $r / 4 && $x <= 0 && $y >= 0) ||
            (-2 * $y - $x <= $r  && $x <= 0 && $y <= 0) ||
            ($x >= 0 && $y <= 0 && $x <= (-1) * $r / 2 && $y >= (-1) * $r)) {
            $res = "Входит";
        } else {
            $res = "Не входит";
        }
    }

    if ($flag){
        $response .= $x;
        $response .= ';';
        $response .= $y;
        $response .= ';';
        $response .= $r;
        $response .= ';';
        $response .= $res;
        $response .= ';';
        $response .= date("Y-m-d H:i:s");
        $response .= ';';
        $response .= $start_time;
        $response .= '/';
    }

    echo $response;


}