const Page = () => {
  const bookmarks = [
    { id: 1, title: 'Google', url: 'https://www.google.com' },
    { id: 2, title: 'Facebook', url: 'https://www.facebook.com' },
    { id: 3, title: 'Twitter', url: 'https://www.twitter.com' },
  ];
  return (
    <ul>
      {bookmarks.map((bookmark) => (
        <li key={bookmark.id}>
          <h2>{bookmark.title}</h2>
          <p>{bookmark.url}</p>
        </li>
      ))}
    </ul>
  );
}

export default Page;