import PageLink from "./PageLink";

// PageLinks 组件：渲染所有导航链接
// parentClass: ul 的样式类名
// itemClass: li 或 Link 的样式类名
const PageLinks = ({ parentClass, itemClass }) => {
  // 定义导航链接数组
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/services", text: "Services" },
    { href: "/tours", text: "Tours" },
    { href: "/register", text: "Register" },
  ];

  return (
    <ul className={parentClass}>
      {/* 遍历 links 数组，渲染每个 PageLink */}
      {links.map((link, index) => (
        <PageLink key={index} link={link} itemClass={itemClass} />
      ))}
    </ul>
  );
};

export default PageLinks;
