import Head from "next/head";
import React, { useEffect, useState } from "react";
import Calendar from "./calendar/build.jsx";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap"
          rel="stylesheet"
        />
        <title>mood.</title>
        <link rel="icon" href="/sun.png" />
      </Head>

      <main>
        <h1 className="title">mood.</h1>

        <p className="description"> How are you today?</p>

        <div className="grid">
          <Calendar />
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/amyy98"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github{" "}
        </a>
      </footer>

      <style jsx>{`
        .container {
          background: rgb(255, 222, 159);
          background: linear-gradient(
            40deg,
            rgba(255, 222, 159, 1) 0%,
            rgba(179, 219, 225, 1) 100%
          );

          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 70px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        h1 {
          animation-name: example;
          animation-duration: 10s;
          animation-iteration-count: 100;
          animation-direction: reverse;
        }
        @keyframes example {
          0% {
            color: #bb8523;
            left: 0px;
            top: 0px;
          }
          25% {
            color: yellow;
            left: 200px;
            top: 0px;
          }
          50% {
            color: lightblue;
            left: 200px;
            top: 200px;
          }
          75% {
            color: #ffd187;
            left: 0px;
            top: 200px;
          }
          100% {
            color: #bb8523;
            left: 0px;
            top: 0px;
          }
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 5rem;
          font-family: "Poppins", sans-serif;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .quote {
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
