import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { Toaster } from "@/components/ui/toaster";
import "quill/dist/quill.snow.css";

// _app.js
import { PrimeReactProvider } from "primereact/api";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddBlog from "./customComponents/AddBlog.tsx";
import BlogCard from "./customComponents/BlogCard.tsx";
import Header from "./customComponents/Header.tsx";
import Footer from "./customComponents/Footer.tsx";
import CategoryCard from "./customComponents/CategoryCard.tsx";
import Blog from "./Blog.tsx";
import LandingPage from "./landingPage/LandingPage.tsx";
import Bot from "./Bot.tsx";
// import axios from "axios";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/blog",
    element: (
      <PrimeReactProvider>
        <Provider store={store}>
          <Header />
          <Blog />
          <Toaster />
          <Footer />
          <Bot/>
        </Provider>
      </PrimeReactProvider>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <Provider store={store}>
        <Header />
        <BlogCard />
        <Footer />
        <Bot/>

      </Provider>
    ),
  },
  {
    path: "/addblog",
    element: (
      <Provider store={store}>
        <AddBlog />
        <Toaster />
      </Provider>
    ),
  },
  {
    path: `/category/:category`,
    element: (
      <Provider store={store}>
        <Header />
        <CategoryCard />
        <Toaster />
        <Footer />
        <Bot/>

      </Provider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
