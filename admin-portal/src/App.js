import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Bar from './scenes/Bar';
import Calendar from './scenes/Calendar';
import Contacts from './scenes/Contacts';
import Dashboard from './scenes/dashboard';
import FAQ from './scenes/FAQ';
import Form from './scenes/Form';
import Geography from './scenes/Geography';
import Header from './scenes/global/Header';
import Invoices from './scenes/Invoices';
import Line from './scenes/Line';
import Pie from './scenes/Pie';
import Sidebar from './scenes/global/Sidebar';
import Team from './scenes/Team';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Header />
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/calendar' element={<Calendar/>} />
              <Route path='/contacts' element={<Contacts/>} />
              <Route path='/faq' element={<FAQ/>} />
              <Route path='/form' element={<Form/>} />
              <Route path='/geography' element={<Geography/>} />
              <Route path='/invoices' element={<Invoices/>} />
              <Route path='/line' element={<Line/>} />
              <Route path='/pie' element={<Pie/>} />
              <Route path='/team' element={<Team/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
