import apiClient from "./client";
import "core-js/stable/atob";

const register = async (userInfo) => await apiClient.post("/users", userInfo);

export default { register };
