-- CREATE DATABASE Clockify
USE Clockify

---create  user table 
CREATE TABLE tbl_user(
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    firstname VARCHAR(MAX)  DEFAULT 'no firstname',
    middlename VARCHAR (MAX) DEFAULT 'no middlename',
    lastname VARCHAR (MAX) DEFAULT 'no lastname',
    identification_number VARCHAR(300)  UNIQUE,
    gender VARCHAR(MAX) DEFAULT 'no gender',
    marital_status VARCHAR(MAX) DEFAULT 'not applicable',
    date_of_birth DATETIME DEFAULT 0,
    email VARCHAR (300)   UNIQUE,
    phone_number INT DEFAULT 0,
    place_of_residence VARCHAR(MAX) DEFAULT 'no residence',
    course_of_study VARCHAR(MAX) DEFAULT 'not applicable',
    institutiton VARCHAR (MAX) DEFAULT 'not applicable',
    graduation_date DATETIME DEFAULT 0,
    employed_on DATETIME DEFAULT 0,
    role VARCHAR (MAX) DEFAULT 'user',
    password VARCHAR(MAX) DEFAULT 'no password',
    isWelcomed INT DEFAULT 0,
    isPasswordChange INT DEFAULT 0,
    isDeleted INT DEFAULT 0,
    position_id INT FOREIGN KEY REFERENCES position (position_id),
    schedule_id INT FOREIGN KEY REFERENCES schedule(schedule_id)


)

SELECT * FROM tbl_user
---create posititons table 
CREATE TABLE position(
    position_id INT IDENTITY(1,1) PRIMARY KEY,
    position_description VARCHAR(MAX) DEFAULT 'no position',
    gross_salary INT  DEFAULT 0,


)

---create schedules table 

CREATE TABLE schedule(
    schedule_id INT IDENTITY(1,1) PRIMARY KEY,
    in_time TIME DEFAULT ,
    out_time TIME  DEFAULT ,
     created_at DATETIME DEFAULT GETDATE()
    
)


CREATE TABLE employee_schedule(
     id INT IDENTITY(1,1) PRIMARY KEY,
     schedule_id INT FOREIGN KEY REFERENCES schedule(schedule_id),
     user_id INT FOREIGN KEY REFERENCES tbl_user(user_id)
)

 
---create employee skills table
CREATE TABLE employee_skill(
    id INT IDENTITY (1,1) PRIMARY KEY,
    language VARCHAR(MAX) DEFAULT 'no language',
    technical VARCHAR (MAX) DEFAULT 'no technicl skill',
    user_id INT FOREIGN KEY REFERENCES tbl_user (user_id)

)


---create photo table
CREATE TABLE photo(
    photo_id INT IDENTITY (1,1) PRIMARY KEY,
    photo_url VARCHAR(MAX)  DEFAULT 'no url',
    uploaded_on DATETIME  DEFAULT GETDATE(),
    user_id INT FOREIGN KEY REFERENCES tbl_user(user_id)

)


----create emergency contact table 
CREATE TABLE emergency_contact(
    id INT IDENTITY (1,1) PRIMARY KEY,
    person_name VARCHAR(MAX) DEFAULT 'no name',
    phone_number INT DEFAULT 'no number',
    relationship VARCHAR(MAX) DEFAULT 'no relationship',
    user_id  INT FOREIGN KEY REFERENCES tbl_user (user_id)
)