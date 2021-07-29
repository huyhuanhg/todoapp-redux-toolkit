import history from '../utils/history';

const SIDEBAR_MENU = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: '',
  },
  {
    title: 'Product Manage HOC',
    path: '/admin/products-with-hoc',
    icon: '',
  },
  {
    title: 'Product Manage Hook',
    path: '/admin/products-with-hook',
    icon: '',
  },
  {
    title: 'To Do List',
    path: '/admin/to-do-list',
    icon: '',
  }
]

function Sidebar({ location, isShowSidebar }) {
  function renderSidebarMenu() {
    return SIDEBAR_MENU.map((sidebarItem, sidebarIndex) => {
      return (
        <div
          key={`sidebar-${sidebarIndex}`}
          className={`sidebar-item ${location.pathname === sidebarItem.path && 'active'}`}
          onClick={() => history.push(sidebarItem.path)}
        >
          {sidebarItem.title}
        </div>
      )
    })
  }
  return (
    <div className={isShowSidebar ? 'sidebar-container show' : 'sidebar-container'}>
      {renderSidebarMenu()}
    </div>
  );
}

export default Sidebar;
