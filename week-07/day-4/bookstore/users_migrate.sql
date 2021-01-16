
-- id,prefix,first_name,last_name,address,height,bitcoin_address,color_preference
-- 1,Rev,Godiva,Beeck,324 Delladonna Terrace,205.1,1B6gZsv2ZSUQSK4t9v47BpHp8y9rwUB3Ab,#289776

CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(15) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `prefix` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `first_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `last_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `address` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `height` decimal(8,1) NOT NULL DEFAULT '0.0',
  `bitcoin_address` varchar(200) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `color_preference` varchar(8) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
 ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

 INSERT INTO `users` (`id`, `prefix`, `first_name`, `last_name`, `address`, `height`, `bitcoin_address`, `color_preference`) VALUES
('', '', '', '', '', '', '', ''),
('', '', '', '', '', '', '', ''),
