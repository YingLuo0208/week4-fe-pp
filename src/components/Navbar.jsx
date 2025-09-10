import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
import Header from './Header';

// Navbar 组件：整个导航栏
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          {/* 网站 Logo 或标题 */}
          <Header />

          {/* 页面导航链接 */}
          <PageLinks parentClass="nav-links" itemClass="nav-link" />

          {/* 社交媒体图标链接 */}
          <SocialLinks parentClass="nav-icons" itemClass="nav-icon"/>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
