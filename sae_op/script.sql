-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 25, 2024 at 10:17 AM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `sae`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
                            `id` int(11) NOT NULL,
                            `type_message` varchar(50) DEFAULT NULL,
                            `message` text,
                            `utilisateur_username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `salon_discussion`
--

CREATE TABLE `salon_discussion` (
                                    `id` int(11) NOT NULL,
                                    `description` varchar(255) DEFAULT NULL,
                                    `nbr_visite` int(11) DEFAULT NULL,
                                    `nbr_personnes_actives` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `utilisateur`
--

CREATE TABLE `utilisateur` (
                               `username` varchar(255) NOT NULL,
                               `password` varchar(255) DEFAULT NULL,
                               `role` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `utilisateur`
--

INSERT INTO `utilisateur` (`username`, `password`, `role`) VALUES
    ('a@gmail.com', 'a', 'client');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
    ADD PRIMARY KEY (`id`),
  ADD KEY `utilisateur_username` (`utilisateur_username`);

--
-- Indexes for table `salon_discussion`
--
ALTER TABLE `salon_discussion`
    ADD PRIMARY KEY (`id`);

--
-- Indexes for table `utilisateur`
--
ALTER TABLE `utilisateur`
    ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `salon_discussion`
--
ALTER TABLE `salon_discussion`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
    ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`utilisateur_username`) REFERENCES `utilisateur` (`username`);
