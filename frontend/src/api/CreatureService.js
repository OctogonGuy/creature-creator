import axios from "axios";

const API_URL = "http://localhost:8080/creature-creator/api";

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