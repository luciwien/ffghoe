
export const metadata = {
  title: "Sanity Studio",
  robots: { index: false, follow: false }, // Verhindert, dass Google das Studio indexiert
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Wichtig für reibungslose mobile Editierung im Studio
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}