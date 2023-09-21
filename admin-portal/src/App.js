import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Header from './scenes/global/Header';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/Team';
import Invoices from './scenes/Invoices';
import Calendar from './scenes/Calendar';
import Contacts from './scenes/Contacts';
// import Bar from './scenes/Bar';
import Form from './scenes/Form';
// import Line from './scenes/Line';
// import Pie from './scenes/Pie';
// import FAQ from './scenes/FAQ';
// import Geography from './scenes/Geography';

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
              {/* <Route path='/bar' element={<Bar/>} /> */}
              <Route path='/calendar' element={<Calendar/>} />
              <Route path='/contacts' element={<Contacts/>} />
              <Route path='/invoices' element={<Invoices/>} />
              {/* <Route path='/faq' element={<FAQ/>} /> */}
              <Route path='/form' element={<Form/>} />
              {/* <Route path='/geography' element={<Geography/>} /> */}
              {/* <Route path='/line' element={<Line/>} /> */}
              {/* <Route path='/pie' element={<Pie/>} /> */}
              <Route path='/team' element={<Team/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
