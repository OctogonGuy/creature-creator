import axios from "axios";

const API_URL = "http://localhost:8080/creature-creator/creature";

export async function getCreatures(page=0, size=10) {
  return await axios.get(`${API_URL}?page=${page}&size=${size}`);
}

export async function postCreature(creature) {
  return await axios.post(API_URL, creature);
}