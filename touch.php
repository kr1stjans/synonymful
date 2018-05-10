<?php
    $currentVersion = trim(file_get_contents('version.txt'));
    $version = isset($_GET["version"]) ? $_GET["version"] : "";
    $os = isset($_GET["os"]) ? $_GET["os"] : "";

    if (!isset($version) || !isset($os) || strlen($version) <= 0 || strlen($os) <= 0 || $version == $currentVersion) {
        header("HTTP/1.1 204 NO CONTENT");
    } else {
        header('Content-type: application/json');
        $actualLink = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
        $latestPath = array(
            "darwin" => "/latest/darwin/Synonymful.zip",
            "linux" => "/latest/linux/Synonymful.zip",
            "win32" => "/latest/win32/",
        );
        echo json_encode(array(
            "url" => $actualLink . $latestPath[$os],
        ));
    }
?>
