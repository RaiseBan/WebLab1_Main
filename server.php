<?php
$start_time = microtime();
$flag = true;
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['x']) && isset($_GET['y']) && isset($_GET['r'])){
    $response = '';
    $res = '';
    $x = $_GET['x'];
    $y = $_GET['y'];
    $r = $_GET['r'];
    if ((!is_numeric($x)) || ($x < -4 || $x > 4)){
        $flag = false;
        http_response_code(422);
        echo "not passed validation....3";
        exit();
    }

    if ((!is_numeric($y)) || ($y <= -3 || $y >= 3)){
        $flag = false;
        http_response_code(422);
        echo "not passed validation....1";
        exit();
    }
    if ((!is_numeric($r)) || ($r < 1 || $r > 5)){
        $flag = false;
        http_response_code(422);
        echo "not passed validation....2";
        exit();
    }

    if ($flag){
        if ((($x * $x + $y * $y) <= $r * $r / 4 && $x <= 0 && $y >= 0) ||
            (-2 * $y - $x <= $r  && $x <= 0 && $y <= 0) ||
            ($x >= 0 && $y <= 0 && $x <= $r / 2 && $y >= (-1) * $r)) {
            $res = "In";
        } else {
            $res = "Out";
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
        date_default_timezone_set("Europe/Moscow");
        $response .= date("Y-m-d H:i:s");
        $response .= ';';
        $response .= $start_time;
        $response .= '/';
    }

    echo $response;


}