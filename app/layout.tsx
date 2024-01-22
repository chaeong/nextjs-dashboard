import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} antialiased'}>{children}</body>
        <p className={'${lusitana.className} antialiased'}>{children}</p>
    </html>
  );
}