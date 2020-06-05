export const getCharacters = () => {
  return fetch('http://localhost:7890/characters')
    .then(res => res.json());
};
