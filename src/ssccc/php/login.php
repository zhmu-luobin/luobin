<?php
	include "DBHelper.php";
	include "format.php";

	$sql = "select * from register";

	$result = query($sql);
	echo json_encode($result, JSON_UNESCAPED_UNICODE);
	//判断当前 email 是否已存在数据表中
	$sql = format("select * from gz1610 where email='{0}' and password='{1}'", $_POST["email"], $_POST["password"]);
	$result = query($sql);
	//当前 email 不存在，执行插入操作
	if(count($result) < 1){
		echo "{state: false, message: '登录失败！！！'}";
	} else {
		echo "{state: true, message: '登录成功！！！'}";
		session_start();
		$_SESSION["login_email"] = $result[0]->email;		
	}
?>