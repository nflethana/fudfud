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

<div id="section">
	<h1>Please provide us with some feedback:</h1>
	<h3>Runner Information:</h3>
	Name: <?= $name ?>
	<br>
	Phone Number:  <?= $x ?>
	<h3>Please rate your experience with this runner from 1 to 5 stars with 5 being the best:</h3>
	Also, note that a rating of 2 or below will mean that you will never see this runner again.
	<div class="radio">
	  <label>
	    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"><span class="glyphicon glyphicon-star"></span>
	  </label>
	</div>
	<div class="radio">
	  <label>
	    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>
	  </label>
	</div>
	<div class="radio">
	  <label>
	    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option2"><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>
	  </label>
	</div>
	<div class="radio">
	  <label>
	    <input type="radio" name="optionsRadios" id="optionsRadios4" value="option2"><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>
	  </label>
	</div>
	<div class="radio">
	  <label>
	    <input type="radio" name="optionsRadios" id="optionsRadios5" value="option2"><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>
	  </label>
	</div>
	<form role="form">
	  <button type="submit" class="btn btn-default">Submit</button>
	</form>
</div>