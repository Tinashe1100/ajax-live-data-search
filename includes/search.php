<?php
include 'dbh.php';

if (isset($_POST['input'])) {
    $search = $_POST['input']; // input box search value;

    // select from database
    $query = "SELECT * FROM tbl_customer WHERE CustomerName LIKE '%$search%' OR Gender LIKE '%$search%' OR Address LIKE '%$search%' OR City LIKE '%$search%' OR PostalCode LIKE '%$search%' OR Country LIKE '%$search%'";
    $return = mysqli_query($connect, $query);
    if (mysqli_num_rows($return) > 0) {
        // $array = array();
        while ($row = mysqli_fetch_array($return)) {
            $data[] = $row;
        }
        echo json_encode($data);
    }
}
