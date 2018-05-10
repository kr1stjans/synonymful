<?php
    $version = $_GET['version'];
    $currentVersion = '1.0.0.';

    if (!isset($version) || strlen($version) <= 0 || $version == $currentVersion) {
        header("HTTP/1.1 204 NO CONTENT");
    } else {
        $uri = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']
        header('Content-type: application/json');
        echo json_encode({
            "url": $url,
        });
    }
?>