<?php
// phpinfo();

try
{
// connection à la base
$bdd=new PDO('mysql:host=localhost;dbname=portfolio','root','');
// echo " bdd OK !!!<br />";
} 

catch(Exception $e)
{
die('Erreur :'.$e->getMessage());
}


   
// print_r($_POST); 

$reponse = $bdd->prepare('INSERT into users (id,username,email,texte) values (null,:username,:email,:texte)');  

$reponse->execute($_POST); 
	

	sleep(10); 
	header("index.html"); 
	

?> 

 <!DOCTYPE html>
<html lang="fr">
<head>
	<meta name="viewport" content="width=device-width, initiale-scale=1.0">
	<meta charset="utf-8">
	<title>Léo Cavarec</title> 
	<link rel="stylesheet" type="text/css" href="style.css">  
	<!-- <link rel="stylesheet" type="text/css" href="jquery.vnm.confettiButton">  -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
</head>
<body>  

	<style type="text/css"> 

	 *
	 { 
	font-family: 'Roboto', sans-serif;
	margin: 0;
	padding: 0; 
	box-sizing: border-box;  
	}  
	body {
		background-color:#000;  
		
	} 

	#container 
	{	
		margin: 25% 0px 0px 0px;
		background-color: #fff;  
		width: 100%; 
		height: 25vh; 
		
		
	
	} 
	p 
	{
		letter-spacing: 2px;
		font-size: 1.5em;
	}
	a 
	{
		letter-spacing: 2px;
		font-size: 1.1em; 
		color: #000;
		/*text-decoration: none;*/
	}
	</style> 

	<div id="container"> 
		<div>
		<p>Votre message a bien été transmis</p> 
		<a href="index.html">Cliquez ici pour revenir vers le portfolio</a>
		</div>
	</div>
	</body>
</html>