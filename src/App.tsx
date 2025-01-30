import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { puzzles }  from "./puzzles";
import { darkTheme } from "./defaultTheme";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: flex-start; */
  /* flex-wrap: wrap; */
  /* gap: 8px; */
  min-height: 100%;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary.purple};
  font-size: 2rem;
  font-weight: bold;
  margin: 20px 0;
`;

const Input = styled.input`
  margin: 20px 0;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.neutral.lightGray};
  border-radius: 5px;
  width: 200px;
`;

const TextBox = styled.div`
  color: ${(props) => props.theme.colors.neutral.charcoalGray};
  font-size: 1rem;
  margin: 10px 0;
  text-align: center;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin: 10px;
`;

function App() {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, setItems] = useState<{ id: string; [key: string]: any }[]>([]);
  const [searchFilter, setSearchFilter] = useState("");

  const filteredPuzzles = puzzles.filter((puzzle) => {
    return puzzle.title.toLocaleLowerCase().includes(searchFilter.toLowerCase())
  });

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <AppContainer>
        <div>
          <Title>Wasgij</Title>
          <Input 
            type="search" 
            onChange={(e) => setSearchFilter(e.target.value)} 
            placeholder="Search..." 
          />
        </div>

        <h3>Firebase data</h3>

        {items.map((item, index) => (
          <div key={index + item.name}>{item.name}</div>
        ))}

        <div style={{ display: "flex", flexWrap: "wrap", flex: "1 0", padding: "0 100px" }}>
          {filteredPuzzles.map((puzzle) => (
            <div style={{ flex: "1 0 200px", gap: "10px" }}>
              <TextBox key={puzzle.title}>{puzzle.title}</TextBox>
              <Image src={puzzle.image_url} alt={puzzle.title} />
            </div>
          ))}
        </div>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
