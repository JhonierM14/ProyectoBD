-- #######################################################
-- file:plpsql.sql
-- Database Course 2024
-- Univalle
-- @JAPeTo
-- #######################################################

-- ##### Functions requirements 

/*Funcion que evita ingresar registros con rol diferente a estudiante (3),
en ciertas relaciones*/
CREATE OR REPLACE FUNCTION check_rol_estudiante()
RETURNS TRIGGER AS $$
DECLARE 
	rol INTEGER;
BEGIN
	SELECT id_rol INTO rol FROM usuario WHERE id_usuario=NEW.id_usuario;
	IF(rol!=3) THEN
		ROLLBACK;
	END IF;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

/*Funcion que evita ingresar registros con un rol diferente a profesor(2) 
en alguna relacion, y, que no permite ingresar mas de 1 profesor o monitor*/
CREATE OR REPLACE FUNCTION check_rol_profesor()
RETURNS TRIGGER AS $$
DECLARE 
	rol INTEGER;
	prof INTEGER;
	moni INTEGER;
	estado BOOLEAN;
BEGIN
	SELECT id_rol INTO rol FROM usuario WHERE id_usuario=NEW.id_usuario;
	IF(rol!=2) THEN
		ROLLBACK;
	END IF;

	SELECT esMonitor FROM usuario INTO estado WHERE id_usuario=NEW.id_usuario;
	
	SELECT COUNT(*) INTO prof FROM
	usuario INNER JOIN profesorCurso ON usuario.id_usuario=profesorCurso.id_usuario
	WHERE esMonitor=FALSE AND id_curso=NEW.id_curso;
	
	SELECT COUNT(*) INTO moni FROM
	usuario INNER JOIN profesorCurso ON usuario.id_usuario=profesorCurso.id_usuario
	WHERE esMonitor=TRUE AND id_curso=NEW.id_curso;
	
	IF ((prof=1 AND estado=FALSE) OR (moni=1 AND estado=TRUE)) THEN
		ROLLBACK;
	END IF;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;