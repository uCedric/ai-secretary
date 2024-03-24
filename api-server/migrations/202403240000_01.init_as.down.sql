SET SCHEMA 'cpo';

---- users ----
DROP TABLE IF EXISTS users;

---- managers ----
DROP TABLE IF EXISTS managers;
DROP TYPE IF EXISTS manager_role_state;

---- client_id_whitelist ----
DROP TABLE IF EXISTS client_id_whitelist;

---- vehicles ----
DROP TABLE IF EXISTS vehicles;