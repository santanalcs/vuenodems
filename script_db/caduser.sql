-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 25-Ago-2021 às 00:35
-- Versão do servidor: 10.4.19-MariaDB
-- versão do PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `caduser`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `city` varchar(100) NOT NULL,
  `uf` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `adress`, `city`, `uf`) VALUES
(1, 'Josafá Nascimento da Silva', 'dasilvajn@yahoo.com', 'Rua Alberto Rodrigues Vasconcelos, 21, Casa 1 - Aeroporto', 'Jundiai', 'SP'),
(2, 'Marina da Cruz Pacheco', 'maricruz_072@hotmail.com', 'Rua 24 de Dezembro, 22 - Paripe', 'Salvador', 'BA'),
(3, ' Heloisa Helena Couto da Silva', 'helocsilva_049@hotmail.com', 'Rua Gusmão Nascimento, 10, Casa 03, - Jardim Soledade', 'Maceió', 'AL'),
(8, 'José Normando Vasconcelos Jr.', 'normandojr@gmail.com', 'Rua Estaleiros,1021 - Maritimo', 'Recife', 'PE'),
(13, 'Josefa Alves Coelho', 'josalvescoelho@gmail.com', 'Rua Pimenta da Veiga, 235, Belvedere', 'Belo Horizonte', 'MG');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
