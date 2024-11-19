import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "Spotify Clone Project",
  description: "Spotify Clone for classical music by Fin Moore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased w-screen overflow-x-hidden bg-stone-900 text-white`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
