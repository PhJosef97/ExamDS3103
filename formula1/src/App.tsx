import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DriverProvider } from "./contexts/DriverContext"
import PageHeader from "./components/shared/PageHeader"
import { 
  AddDriversPage, 
  DeleteDriversPage, 
  DriversPage, 
  DriversQuizPage, 
  SearchDriverPage, 
  UpdateDriverPage, 
  EndpointsDriverPage,
  HomePage, 
  } from "./pages/index.ts"

function App() {

  return (
    <>
 
    <BrowserRouter>
    <header className="container-fluid px-0">
      <PageHeader/>
      </header>
    <main className="container">
      <DriverProvider>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="drivers" element={<DriversPage/>}></Route>
          <Route path="drivers-quiz" element={<DriversQuizPage/>}></Route>
          <Route path="add-driver" element={<AddDriversPage/>}></Route>
          <Route path="drivers-search" element={<SearchDriverPage/>}></Route>
          <Route path="delete-driver" element={<DeleteDriversPage/>}></Route>
          <Route path="update-driver" element={<UpdateDriverPage/>}></Route>
          <Route path="endpoints-driver" element={<EndpointsDriverPage/>}></Route>
        </Routes>
      </DriverProvider>
    </main>
    </BrowserRouter>
    </>
  )
}

export default App
