 <?php
 session_start();
 $conn = mysql_connect("127.0.0.1","root","");
 $db = mysql_select_db("nets213",$conn);
 $name = $_SESSION['sessionVar_name'];
 echo $name;

 
 if(isset($_POST['optionsRadios1'])){

 $name = stripslashes($name);
 $myusername = mysql_real_escape_string($name);
 $sql =" UPDATE phplogin2 set rating = 1 where user_name = '$name' ";

 //$sql ="INSERT into phplogin2 values (".$id.",'".$user."','".$pass."','".$ph."')";

 $qury = mysql_query($sql);

 	
 	echo "1";
 }

if(isset($_POST['optionsRadios2'])){

	$name = stripslashes($name);
 $myusername = mysql_real_escape_string($name);
 $sql =" UPDATE phplogin2 set rating = 2 where user_name = '$name' ";

 //$sql ="INSERT into phplogin2 values (".$id.",'".$user."','".$pass."','".$ph."')";

 $qury = mysql_query($sql);


 	
 	echo "2";
 }
 if(isset($_POST['optionsRadios3'])){

 	$name = stripslashes($name);
 $myusername = mysql_real_escape_string($name);
 $sql =" UPDATE phplogin2 set rating = 3 where user_name = '$name' ";

 //$sql ="INSERT into phplogin2 values (".$id.",'".$user."','".$pass."','".$ph."')";

 $qury = mysql_query($sql);


 	echo "3";
 }
 if(isset($_POST['optionsRadios4'])){

 	$name = stripslashes($name);
 $myusername = mysql_real_escape_string($name);
 $sql =" UPDATE phplogin2 set rating = 4 where user_name = '$name' ";

 //$sql ="INSERT into phplogin2 values (".$id.",'".$user."','".$pass."','".$ph."')";

 $qury = mysql_query($sql);


 	
 	echo "4";
 }

if(isset($_POST['optionsRadios5'])){

 	$name = stripslashes($name);
 $myusername = mysql_real_escape_string($name);
 $sql =" UPDATE phplogin2 set rating = 5 where user_name = '$name' ";

 //$sql ="INSERT into phplogin2 values (".$id.",'".$user."','".$pass."','".$ph."')";

 $qury = mysql_query($sql);


 	
 	echo "5";
 }





 ?>

