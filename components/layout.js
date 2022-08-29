import Header from './header';
import Header2 from './Header2';

export default function Layout({ children }) {
  return (
    <>
      <Header2 />
      <Header />
      <main>{children}</main>
    </>
  )
}