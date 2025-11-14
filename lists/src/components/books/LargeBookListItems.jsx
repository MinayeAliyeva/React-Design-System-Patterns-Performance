export const LargeBookListItem = ({ book }) => {
  const { name, price, title, pages } = book;
  return (
    <>
      <h1>{name}</h1>
      <p>{price}</p>
      <h2>Title:</h2>
      <p>{title}</p>
      <ul>
        {pages}
      </ul>
    </>
  );
};
