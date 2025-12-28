// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Agora La Familia",
  description: "Website reuni SMP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
