import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeBookListItems";
import { SmallBookListItem } from "./components/books/SmallListItems";
import { NumberedList } from "./components/lists/NumberedList";
import { RegularList } from "./components/lists/Regular";
import { authors } from "./data/authors";
import { books } from "./data/books";

function App() {
  return (
    <>
      <NumberedList
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeAuthorListItem}
      />
      <NumberedList
        items={books}
        sourceName={"book"}
        ItemComponent={SmallBookListItem}
      />
      <RegularList
        items={books}
        sourceName="book"
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
