<?php
    //根据菜品的编号，查询出该菜品的数据，并以json格式返回
    $dno = $_REQUEST['dno'];

    $conn = mysqli_connect('127.0.0.1','root','','kaifanla');
    $sql = 'SET   NAMES   UTF8';
    mysqli_query($conn,  $sql);
    $sql = "SELECT id, name, img,img_l, material, detail  FROM dish WHERE id='$dno' ";
    $result = mysqli_query($conn,  $sql);

    $row = mysqli_fetch_array($result,  MYSQL_ASSOC);
    sleep(1);
    echo json_encode($row);
?>