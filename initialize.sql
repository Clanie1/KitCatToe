CREATE TABLE Usuario (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nickname NVARCHAR(50) NOT NULL,
    email NVARCHAR(100) NOT NULL UNIQUE,
    password NVARCHAR(255) NOT NULL,
    hash NVARCHAR(255) NOT NULL,
    salt NVARCHAR(255) NOT NULL,
    profile_picture_url NVARCHAR(255) NULL
);

CREATE TABLE Partida (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    win BIT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Usuario(id)
);
