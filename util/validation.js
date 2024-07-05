function postIsValid() {
  return (
    title &&
    content &&
    title.trim() !== '' &&
    content.trim() !== ''
  );
}

module.exports = {
  postIsValid: postIsValid
}