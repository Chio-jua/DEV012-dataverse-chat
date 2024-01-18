//aquí vamos a crear la funcionalidad para que chatgpt nos dé una respuesta

export function getCompletion(inputUsuario, cantante) {

  const API_KEY = localStorage.getItem('chatGptApiKey');
  const respuesta = fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_KEY,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": `Simula que eres ${cantante}, si eres un grupo o banda, asume que eres el vocalista principal, que tu respuesta sea breve`,

        },
        {
          "role": "user",
          "content": inputUsuario,
        },


      ]
    })
  }
  )
  return respuesta;
}