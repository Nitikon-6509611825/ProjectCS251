-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2024 at 02:58 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysql_projectcs251`
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
  `Arist` varchar(500) NOT NULL,
  `description` text NOT NULL,
  `publish` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
  `Buyer` varchar(13) NOT NULL,
  `Owner` varchar(13) NOT NULL,
  `history` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail`
--

CREATE TABLE `detail` (
  `bID` varchar(10) NOT NULL,
  `weight` decimal(10,2) NOT NULL,
  `size` varchar(50) NOT NULL,
  `page` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `filter`
--

CREATE TABLE `filter` (
  `bID` varchar(10) NOT NULL,
  `bType` varchar(10) NOT NULL,
  `Artist` varchar(255) NOT NULL,
  `publish` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `logistic`
--

CREATE TABLE `logistic` (
  `trackID` int(11) NOT NULL,
  `cost` decimal(10,2) NOT NULL,
  `logisticCompany` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `owner`
--

CREATE TABLE `owner` (
  `OwnerID` varchar(13) NOT NULL,
  `account` varchar(100) NOT NULL
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
-- Table structure for table `picture`
--

CREATE TABLE `picture` (
  `bID` varchar(10) NOT NULL,
  `picture` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `bID` varchar(10) NOT NULL,
  `account` varchar(100) NOT NULL,
  `rating` int(10) NOT NULL
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
  `bID` varchar(10) NOT NULL,
  `totalPrice` decimal(10,2) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `tNo` varchar(10) NOT NULL,
  `tName` varchar(500) NOT NULL
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
  `Tel` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `userName`, `fName`, `lName`, `password`, `gender`, `email`, `Tel`) VALUES
('', 'johndoe', 'John', 'Doe', 'password123', '', 'john@example.com', '');

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
