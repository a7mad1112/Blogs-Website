import './globals.css';
import Navbar from './components/Navbar';
import MyProfilePic from './components/MyProfilePic'
export const metadata = {
  title: "Ahmed's Blog",
  description: 'Create By Ahmed Alawneh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <header>
          <Navbar />
        </header>
        <MyProfilePic/>
        {children}
      </body>
    </html>
  );
}
