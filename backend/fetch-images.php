<?php
$owner = 'MCSLTeam'; // GitHub 用户名
$repo = 'MCSLHub'; // 仓库名称
$path = 'img'; // 图片在仓库中的路径
$token = ''; // GitHub token

$url = "https://api.github.com/repos/$owner/$repo/contents/$path";
$opts = [
    "http" => [
        "method" => "GET",
        "header" => [
            "User-Agent: PHP",
            "Authorization: token $token"
        ]
    ]
];
$context = stream_context_create($opts);
$response = file_get_contents($url, false, $context);
$files = json_decode($response, true);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
echo json_encode($files);
