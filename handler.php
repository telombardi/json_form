<?php
// This page takes the post data and saves it as a file.
// Directory must be world writable for this to work. chmod 777

$file = $_POST['file'];  //Get the file data from the form
$d =getdate(date("U")); //Get the date
$my_date =  $d['year']."_".$d['month']."_". $d['mday']; //Build the date
$my_time = gettimeofday(true); //Get the time
echo file_put_contents("/Users/tom/dump/file_". $my_date. "_" . $my_time .".json",$file); //Save the file contents to the file system

?>

