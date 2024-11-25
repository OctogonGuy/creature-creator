import axios from "axios";

// eslint-disable-next-line no-undef
const API_URL = (process.env.NODE_ENV === "development" ? "http://localhost:8080" : "https://www.octogonbackend.xyz") + "/creature-creator/api";

export async function getCreature(id) {
  return await axios.get(`${API_URL}?id=${id}`);
}

export async function getCreatures(page=1, size=10) {
  page -= 1;
  return await axios.get(`${API_URL}?page=${page}&size=${size}`);
}

export async function postCreature(creature) {
  return await axios.post(API_URL, creature);
}