// Podría ser una función en tu componente de React o parte de tus acciones de Redux

const filterPostsByHashtags = (posts, bannedHashtags) => {
    return posts.filter(post => {
      // Asumiendo que 'caption' es un string con el texto del post, incluidos hashtags.
      // Deberías normalizar y separar los hashtags para una mejor coincidencia.
      const postHashtags = post.caption.match(/#[\w]+/g) || [];
      // Verifica si alguno de los hashtags del post está en la lista de no deseados.
      return !postHashtags.some(hashtag => bannedHashtags.includes(hashtag.toLowerCase()));
    });
  };
  