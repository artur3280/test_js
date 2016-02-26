<?php
$host='localhost'; // имя хоста (уточняется у провайдера)
$database='work'; // имя базы данных, которую вы должны создать
$user='artur3280'; // заданное вами имя пользователя, либо определенное провайдером
$pswd='agent007'; // заданный вами пароль

$dbh = mysql_connect($host, $user, $pswd) ;
mysql_select_db($database) ;
$query = "SELECT * FROM  `user`";
$res = mysql_query($query);
$r=array();
while($row = mysql_fetch_array($res))
{
    $r[]=array(User=>$row['User'],
        Host=>$row['Host'],
        Password=> $row['Password']);

    $json=json_encode($r);
    echo $json.'<br>';

}
