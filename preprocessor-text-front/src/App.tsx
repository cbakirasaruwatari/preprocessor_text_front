import React from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
// 独自に作成したコンポーネントのインポート
import MainContent from "./MainContent";
import MiniDrawer from "./MiniDrawer";
// 独自のテーマを作成する
const theme = createMuiTheme({
  palette: {
    type: "dark", // ダークテーマ
    // primary: green,
    // primary: red,
  },
  typography: {
    fontFamily: ["Noto Sans", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontSize: "1.75rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1.25rem",
    },
    h4: {
      fontSize: "1.125rem",
    },
    h5: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "1rem",
    },
  },
});
function App() {
  const [input, setInput] = React.useState<string>("");
  React.useEffect(() => {
    setInput("検索");
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MiniDrawer input={input} setInput={setInput} />
      <MainContent  input={input}/>
    </MuiThemeProvider>
  );
}
export default App;