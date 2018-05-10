<?php
    $currentVersion = trim(file_get_contents('version.txt'));
    $version = isset($_GET["version"]) ? $_GET["version"] : "";

    if (!isset($version) || strlen($version) <= 0 || $version == $currentVersion) {
        header("HTTP/1.1 204 NO CONTENT");
    } else {
        header('Content-type: application/json');
        $actualLink = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]";
        echo json_encode(array(
            "url" => $actualLink . "/latest/darwin/Synonymful.zip",
        ));
    }
?>
