 <?php
 session_start();
 $conn = mysql_connect("127.0.0.1","root","");
 $db = mysql_select_db("nets213",$conn);
 $name = $_SESSION['name'];
 $runner = $_SESSION['runner'];
 $requester = $_SESSION['requester'];
 $rating = $_SESSION['rating'];
 $location = $_SESSION['location'];

 echo $name;

 
 if(isset($_POST['radian'])){

 $name = stripslashes($name);
 $myusername = mysql_real_escape_string($name);

  $name = stripslashes($runner);
 $myusername = mysql_real_escape_string($runner);

  $name = stripslashes($requester);
 $myusername = mysql_real_escape_string($requester);

 $name = stripslashes($rating);
 $myusername = mysql_real_escape_string($rating);

$name = stripslashes($location);
 $myusername = mysql_real_escape_string($location);


 $sql ="INSERT into fud_run values ("$name",'"$runner"','"$requester"','"$rating"','"$location"')";

 $qury = mysql_query($sql);

 	
 	echo "radian";
 }

if(isset($_POST['huntsman'])){

 $name = stripslashes($name);
 $myusername = mysql_real_escape_string($name);

   $name = stripslashes($runner);
 $myusername = mysql_real_escape_string($runner);

  $name = stripslashes($requester);
 $myusername = mysql_real_escape_string($requester);

 $name = stripslashes($rating);
 $myusername = mysql_real_escape_string($rating);

 $name = stripslashes($location);
 $myusername = mysql_real_escape_string($location);
 

  $sql ="INSERT into fud_run values ("$name",'"$runner"','"$requester"','"$rating"','"$location"')";

 $qury = mysql_query($sql);


 	
 	echo "hunts";
 }

 if(isset($_POST['engineering'])){

 $name = stripslashes($name);
 $myusername = mysql_real_escape_string($name);

   $name = stripslashes($runner);
 $myusername = mysql_real_escape_string($runner);

  $name = stripslashes($requester);
 $myusername = mysql_real_escape_string($requester);

 $name = stripslashes($rating);
 $myusername = mysql_real_escape_string($rating);

  $name = stripslashes($location);
 $myusername = mysql_real_escape_string($location);



  $sql ="INSERT into fud_run values ("$name",'"$runner"','"$requester"','"$rating"','"$location"')";

 $qury = mysql_query($sql);


 	echo "engineering";
 }

 if(isset($_POST['harrison'])){

 $name = stripslashes($name);
 $myusername = mysql_real_escape_string($name);

   $name = stripslashes($runner);
 $myusername = mysql_real_escape_string($runner);

  $name = stripslashes($requester);
 $myusername = mysql_real_escape_string($requester);

 $name = stripslashes($rating);
 $myusername = mysql_real_escape_string($rating);

   $name = stripslashes($location);
 $myusername = mysql_real_escape_string($location);


  $sql ="INSERT into fud_run values ("$name",'"$runner"','"$requester"','"$rating"','"$location"')";


 $qury = mysql_query($sql);
 	
 	echo "harrison";
 }



 ?>

