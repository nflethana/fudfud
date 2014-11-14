<?php
 	$conn = mysql_connect("127.0.0.1","root","");
 	$db = mysql_select_db("nets213",$conn);
 ?>

 <?php 
       session_start();

 		$user = $_POST['n'];
 		$pass = $_POST['p'];
 		$id = $_POST['id'];
 		$ph = $_POST['ph'];
 		$_SESSION['sessionVar'] = "$ph";
 		$_SESSION['sessionVar_name'] = "$user";
 		echo "$ph";
 		echo "$user"; 

 		$sql ="INSERT into phplogin2 values (".$id.",'".$user."','".$pass."','".$ph."')";

 		$qury = mysql_query($sql);




	$result= "Yes";
	$json['response']=$result;
	header('Content-type: text/json');
	echo json_encode($json);
	header("location:login_success_nets213.php");




 ?>