<?php
session_start();
 $x = $_SESSION['sessionVar'];
 $name = $_SESSION['sessionVar_name'];

 if(isset($_POST['huntsman'])){
 	echo "Posted Huntsman";
 }
//print "$x";
?>


<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap-theme.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>

<link rel="stylesheet" type="text/css" href="css/nav.css">
<link rel="stylesheet" type="text/css" href="css/rightNav.css">
<link rel="stylesheet" type="text/css" href="css/section.css">


<div id="nav">
  <h1>FudFud</h1>
  <table>
  	<tr><th>Drop Off Locations:<th></tr>
  	<tr><td>Huntsman</td></tr>
	<tr><td>Engineering Quad</td></tr>
  </table>
</div>

<div id="rightNav">
	<button type="button" class="btn btn-default btn-sm">
	  <span class="glyphicon glyphicon-plus"></span> Fud Run
	</button>
	<button type="button" class="btn btn-default btn-sm">
	  <span class="glyphicon glyphicon-log-out"></span> Log Out
	</button>
</div>
<script>
function onSubmit(){
	alert(document.getElementByID("#check").val());
}
</script>

<div id="section">
	<h1>Add a new Fud Run:</h1>
	<h3>Runner Information:</h3>


	Name: <?= $name ?>
	<br>

	Phone Number: <?= $x ?>
	<form role="form" action="review2_nets213.php" method="post">
	<h3>Delivery to:</h3>
	  <div class="checkbox">
	    <label>
	      <input type="checkbox" id="huntsman" name="huntsman" > Huntsman
	    </label>
	  </div>
	  <div class="checkbox" id="check">
	    <label>
	      <input type="checkbox"> Engineering Quad
	    </label>
	  </div>
	<h3>Delivery From: </h3>
	<div class="checkbox">
	    <label>
	      <input type="checkbox"> Magic Carpet
	    </label>
	</div>
	<div class="checkbox">
	    <label>
	      <input type="checkbox"> Hemo's
	    </label>
	</div>
	<div class="form-group">
	    <h3>ETA at food truck:</h3>
	    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="2:00pm">
	</div>
	  <button type="submit" class="btn btn-default">Submit</button>
	</form>
</div>

<?php
session_start();
 $x = $_SESSION['sessionVar'];
print "$x";
?>
