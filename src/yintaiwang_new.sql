/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : yintaiwang_new

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-05-15 11:33:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `register`
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `idx` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`idx`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES ('1', '15073916386', '123456');
INSERT INTO `register` VALUES ('2', '15088888888', '123456');
INSERT INTO `register` VALUES ('3', '{0}', '{1}');
INSERT INTO `register` VALUES ('4', '123456', '123456');
INSERT INTO `register` VALUES ('5', 'ygfgyuqgygy', 'hvjhvjhvj');
INSERT INTO `register` VALUES ('6', '123', '123');
INSERT INTO `register` VALUES ('7', '234', 'addf');
INSERT INTO `register` VALUES ('8', 'qeer', '134');
INSERT INTO `register` VALUES ('9', '`23', 'sssdf');
INSERT INTO `register` VALUES ('10', '123123123', '123456');
INSERT INTO `register` VALUES ('11', '11111111111', '111111111111');
INSERT INTO `register` VALUES ('12', '', '');
INSERT INTO `register` VALUES ('13', '1eweetg', '123456');
INSERT INTO `register` VALUES ('14', 'hsakygf', '123456');
INSERT INTO `register` VALUES ('15', '1390å›´ç»•57589', '1234567');
INSERT INTO `register` VALUES ('16', '1879359531', '12345');
INSERT INTO `register` VALUES ('17', '113445', '123');
INSERT INTO `register` VALUES ('18', '1234556', '123');
INSERT INTO `register` VALUES ('19', '1234568996544', '123');
INSERT INTO `register` VALUES ('20', 'jksgfaff', '123');
INSERT INTO `register` VALUES ('21', 'kgfgafg', '12');
INSERT INTO `register` VALUES ('22', 'afshgkfagkf', 'adafaf');
INSERT INTO `register` VALUES ('23', '13573916386', '123456');
INSERT INTO `register` VALUES ('24', '15073116399', '123456');
INSERT INTO `register` VALUES ('25', '15073916389', '123456');
INSERT INTO `register` VALUES ('26', '13111111111', '111111');
INSERT INTO `register` VALUES ('27', '13012345678', '123456');
INSERT INTO `register` VALUES ('28', '13052419901', '123456');
INSERT INTO `register` VALUES ('29', '13173916311', '123456');
INSERT INTO `register` VALUES ('30', '15072916385', '123456');
INSERT INTO `register` VALUES ('31', '13011223333', '123456');
INSERT INTO `register` VALUES ('32', '13052416311', 'a123456');
INSERT INTO `register` VALUES ('33', '13052419909', '1a2345');
INSERT INTO `register` VALUES ('34', '13052519012', 'a123456');
INSERT INTO `register` VALUES ('35', '13052419905', '123456a');
INSERT INTO `register` VALUES ('36', '15073923333', '123456');
INSERT INTO `register` VALUES ('37', '13199999999', 'abc123456');
INSERT INTO `register` VALUES ('38', '13219900121', 'a123456');
INSERT INTO `register` VALUES ('39', '15012345698', 'abc123456');
INSERT INTO `register` VALUES ('40', '13052419302', '123456a');
INSERT INTO `register` VALUES ('41', '13189001234', '123456a');
