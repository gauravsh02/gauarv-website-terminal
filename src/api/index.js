export const getRandomQuote = async () => {
  try {
    // using axios
    // const { data } = await fetch('http://api.quotable.io/random');
    const response = await fetch('http://api.quotable.io/random')
    const data = await response.json();
    return `${data.content} ~ ${data.author}`;
  } catch (err) {
    return err;
  }
}