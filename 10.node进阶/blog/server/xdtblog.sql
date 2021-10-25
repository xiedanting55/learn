-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2021 年 10 月 25 日 08:39
-- 服务器版本: 5.5.53
-- PHP 版本: 5.4.45

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `xdtblog`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '咨询id',
  `title` varchar(20) DEFAULT NULL COMMENT '标题',
  `author` varchar(20) DEFAULT NULL COMMENT '作者',
  `date` varchar(20) DEFAULT NULL COMMENT '日期',
  `imgUrl` varchar(100) DEFAULT NULL COMMENT '配图',
  `content` longtext COMMENT '内容-存储html标签',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `author`, `date`, `imgUrl`, `content`) VALUES
(1, '一套框架多种平台,vue', '张三', '2013-03-20', '/images/vue.svg', '<p>第一</p>\r\n<p>vue</p>'),
(2, '一套框架多种平台,angular', '李四', '2021-05-55', '/images/angular.svg', '<p>第二</p>\r\n<p>Angular</p>'),
(3, '一套框架多种平台,react', '王五', '2016-10-07', '/images/react.svg', '<p>第三</p>\r\n<p>React</p>');

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(100) DEFAULT NULL COMMENT '轮播图地址',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`id`, `imgUrl`) VALUES
(1, '/images/a.jpg'),
(2, '/images/logo.png');

-- --------------------------------------------------------

--
-- 表的结构 `subject`
--

CREATE TABLE IF NOT EXISTS `subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `icon` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `subject`
--

INSERT INTO `subject` (`id`, `icon`, `title`) VALUES
(1, '/images/my-selected.png', '第一'),
(2, '/images/rank-selected.png', '第二'),
(3, '/images/topic-selected.png', '第三');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(20) NOT NULL COMMENT '账号',
  `pwd` varchar(20) NOT NULL COMMENT '密码',
  `token` longtext NOT NULL COMMENT '令牌',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `account`, `pwd`, `token`) VALUES
(1, 'xiedanting', '123456', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteWFjY291bnQiOiJ4aWVkYW50aW5nIiwibXlwd2QiOiIxMjM0NTYiLCJpYXQiOjE2MzUxNDU1MDgsImV4cCI6MTYzNTE0OTEwOH0.uU77PlK8jTJ0zFHIQ-DbSeBYDEeVCvpQBqQh4kn6rjE');

-- --------------------------------------------------------

--
-- 表的结构 `zixun`
--

CREATE TABLE IF NOT EXISTS `zixun` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '咨询id',
  `title` varchar(100) DEFAULT NULL COMMENT '标题',
  `subtitle` varchar(100) DEFAULT NULL COMMENT '子标题',
  `icon` varchar(100) NOT NULL COMMENT 'logo',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `zixun`
--

INSERT INTO `zixun` (`id`, `title`, `subtitle`, `icon`) VALUES
(1, 'vue', '学会vue构建应用...', '/images/vue.svg'),
(2, 'angular', '学会angular构建应用...', '/images/angular.svg'),
(3, 'react', '学会react构建应用...', '/images/react.svg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
