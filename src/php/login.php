<?php
	include "DBHelper.php";
	include "format.php";

	// $sql = "select * from register";

	// $result = query($sql);
	// echo json_encode($result, JSON_UNESCAPED_UNICODE);

	$phone = $_POST["phone"];
	$password = $_POST["password"];

	$sql = "select * from register where `phone`='$phone' and `password`= '$password'";


	//判断当前 email 是否已存在数据表中
	// $sql = format("select * from register where phone='{0}' and password='{1}'", $_POST["phone"], $_POST["password"]);
	
	$result = query($sql);

	// //当前 phone 不存在，执行插入操作
	if(count($result) < 1){
	 	echo "{state: false, message: '登录失败！！！'}";
	 } else {
	 	echo "{state: true, message: '登录成功！！！'}";
	 	// session_start();
	 	// $_SESSION["login_phone"] = $result[0]->phone;		
	}
?>