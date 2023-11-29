import "./globals.css";

export const metadata = {
  title: "Simple PostApp",
  description: "simple post application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
