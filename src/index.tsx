import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"
import Home from "../src/Components/Home"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)