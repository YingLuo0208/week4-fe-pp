
// PageLink 组件：渲染单个导航链接
// link: 对象，包含 href 和 text
// itemClass: 可选，添加样式类名
const PageLink = ({ link, itemClass }) => {
  return (
    <li>
      {/* 使用 React Router 的 Link 组件实现路由跳转 */}
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  );
};
export default PageLink;