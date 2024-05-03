-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 02, 2024 at 03:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs251_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `UserID` varchar(13) NOT NULL,
  `Address` varchar(500) NOT NULL,
  `u_fname` varchar(50) NOT NULL,
  `u_lnaem` varchar(50) NOT NULL,
  `email` varchar(250) NOT NULL,
  `Tel` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `UserID` varchar(13) NOT NULL,
  `Province` varchar(100) NOT NULL,
  `Street` varchar(100) NOT NULL,
  `About` varchar(300) NOT NULL,
  `PostNumber` varchar(20) NOT NULL,
  `District` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `bID` varchar(10) NOT NULL,
  `tNo` varchar(10) NOT NULL,
  `bName` varchar(500) NOT NULL,
  `price` double NOT NULL,
  `picture` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `booktype`
--

CREATE TABLE `booktype` (
  `tNo` int(11) DEFAULT NULL,
  `tName` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booktype`
--

INSERT INTO `booktype` (`tNo`, `tName`) VALUES
(1, 'นวนิยาย'),
(2, 'การเงิน'),
(3, 'การพัฒนาตนเอง'),
(4, 'นิตยสาร'),
(5, 'ประวัติศาสตร์'),
(6, 'ปรัชญา'),
(7, 'วิทยาศาสตร์'),
(8, 'อื่นๆ');

-- --------------------------------------------------------

--
-- Table structure for table `buket`
--

CREATE TABLE `buket` (
  `UserID` varchar(13) NOT NULL,
  `bName` varchar(500) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `totalPrice` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `buyer`
--

CREATE TABLE `buyer` (
  `UserID` varchar(13) NOT NULL,
  `account` varchar(100) NOT NULL,
  `Ufname` varchar(100) NOT NULL,
  `Ulname` varchar(100) NOT NULL,
  `email` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `UserID` varchar(13) NOT NULL,
  `cName` char(50) NOT NULL,
  `cEmail` text NOT NULL,
  `history` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `filter`
--

CREATE TABLE `filter` (
  `bID` varchar(10) NOT NULL,
  `bType` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `UserID` varchar(13) NOT NULL,
  `Buyer` varchar(13) NOT NULL,
  `Owner` varchar(13) NOT NULL,
  `p_history` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `search`
--

CREATE TABLE `search` (
  `bID` varchar(10) NOT NULL,
  `Book` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `email`, `fullname`, `password`) VALUES
(0, 'dongnitikon@gmail.com', 'dong nitikon', 'dong4446'),
(0, 'dongnitikon@gmail.com', 'dong nitikon', 'dong4446'),
(0, 'dongnitikon@gmail.com', 'dong nitikon', 'dong4446'),
(0, 'dongnitikon@gmail.com', 'dong nitikon', 'dong4446'),
(0, 'dongnitikon@gmail.com', 'dong nitikon', 'dong4446');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `trackID` varchar(7) NOT NULL,
  `uID` varchar(50) NOT NULL,
  `bID` varchar(10) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` varchar(13) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `fName` varchar(50) NOT NULL,
  `lName` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `gender` char(1) NOT NULL,
  `email` varchar(250) NOT NULL,
  `Tel` varchar(15) NOT NULL,
  `uPic` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `userName`, `fName`, `lName`, `password`, `gender`, `email`, `Tel`, `uPic`) VALUES
('0', 'admin', 'Admin', 'BB', '00000000', 'N', 'admin888@gmail.com', '0900000000', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
