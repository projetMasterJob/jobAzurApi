CREATE DATABASE IF NOT EXISTS jobexplorer;
USE jobexplorer;

-- Table des utilisateurs (Demandeurs et Entreprises)
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    address TEXT,
    phone VARCHAR(20) UNIQUE,
    jwt_token TEXT,
    role ENUM('job_seeker', 'company') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des entreprises
CREATE TABLE companies (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) UNIQUE NOT NULL,  -- L'entreprise est aussi un utilisateur
    name VARCHAR(100) NOT NULL,
    description TEXT,
    website VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des offres d'emploi
CREATE TABLE jobs (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    company_id CHAR(36) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    salary DECIMAL(10,2) DEFAULT NULL,
    job_type ENUM('full_time', 'part_time', 'internship', 'contract') NOT NULL,
    posted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- Table des coordonnées GPS (utilisées pour les entreprises et offres d’emploi)
CREATE TABLE locations (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    entity_type ENUM('company', 'job') NOT NULL,
    entity_id CHAR(36) NOT NULL,
    latitude DECIMAL(9,6) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL,
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (entity_type, entity_id),
    FOREIGN KEY (entity_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- Table des candidatures
CREATE TABLE applications (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    job_id CHAR(36) NOT NULL,
    status ENUM('pending', 'accepted', 'rejected') DEFAULT 'pending',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
);

-- Table des notifications envoyées aux utilisateurs
CREATE TABLE notifications (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Table des discussions entre utilisateurs et entreprises
CREATE TABLE chats (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    user_id CHAR(36) NOT NULL,
    company_id CHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_id, company_id), -- Un seul chat par utilisateur et entreprise
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- Table des messages échangés
CREATE TABLE messages (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    chat_id CHAR(36) NOT NULL,
    sender_id CHAR(36) NOT NULL,
    content TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (chat_id) REFERENCES chats(id) ON DELETE CASCADE,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE CASCADE
);
