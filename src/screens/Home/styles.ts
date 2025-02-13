import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#f4f5f9",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    backgroundColor: "#1f1e25",
    flex: 1,
    height: 56,
    borderRadius: 5,
    color: "#f4f5f9",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#f4f5f9",
    fontSize: 24,
  },

  listEmptyText: {
    color: "#f4f5f9",
    fontSize: 14,
    textAlign: "center",
  },
});
