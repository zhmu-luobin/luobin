<?php
	include 'DBHelper.php';
	include 'format.php';

	//判断当前 email 是否已存在数据表中
	$phoneCheck = format("select * from register where phone='{0}'", $_POST["phone"]);
	$result = query($phoneCheck);
	//当前 phone 不存在，执行插入操作
	if(count($result) < 1){
		$sql = format("insert into register(phone, password) values('{0}', '{1}')", $_POST["phone"], $_POST["password"]);
		// echo $sql;
		$excute = excute($sql);
		if($excute){
			echo "{state: true}";
		} else {
			echo "{state: false, message: '插入失败！！！'}";
		}
	} 
?>