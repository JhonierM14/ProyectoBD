import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const InicioAppMovil = () => {
  return (
    <View style={styles.container}>
      {/* Fondo */}
      <View style={styles.background}></View>

      {/* Título Attenzio */}
      <Text style={styles.title}>
        <Text style={styles.titlePrimary}>Atten</Text>
        <Text style={styles.titleSecondary}>zio</Text>
      </Text>

      {/* Botón de "Iniciar sesión" */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* Botón de "Registrarse" */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#FFDAA4",
  },
  title: {
    textAlign: "center",
    fontSize: 48,
    fontFamily: "SpaceMono-Regular",
    marginBottom: 80,
  },
  titlePrimary: {
    color: "#000000",
  },
  titleSecondary: {
    color: "#FF9900",
  },
  button: {
    backgroundColor: "#FF9900",
    borderWidth: 2,
    borderColor: "#000000",
    width: "60%",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: "#FFDAA4",
    borderWidth: 2,
    borderColor: "#000000",
    width: "60%",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    fontFamily: "SpaceMono-Regular",
    color: "#000000",
  },
});

export default InicioAppMovil;
