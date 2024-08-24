
import { Roles } from "@prisma/client";
import {
  LayoutDashboardIcon,
  LogOutIcon,
  BanIcon,
  PlusSquareIcon,
  ListIcon,
  UserIcon,
} from "lucide-react";

type SidebarItemWithoutSubMenu = {
  id: number;
  name: string;
  icon: any;
  link: string;
};

export type SidebarItem = SidebarItemWithoutSubMenu & {
  submenus?: SidebarItemWithoutSubMenu[];
  redirect?: { path: string };
  allowRoles: Roles[]
};

const navigation: SidebarItem[] = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: LayoutDashboardIcon,
    allowRoles: ['admin', 'member'],
  },
  {
    id: 2,
    name: "Boycott Products",
    link: "/dashboard/boycott/products",
    redirect: { path: '/dashboard/boycott/products/create' },
    allowRoles: ['admin', 'member'],
    icon: BanIcon,
    submenus: [
      {
        id: 1,
        icon: PlusSquareIcon,
        link: '/dashboard/boycott/products/create',
        name: 'Create',
      },
      {
        id: 2,
        icon: ListIcon,
        link: '/dashboard/boycott/products/list',
        name: 'List'
      }
    ]
  },
  {
    id: 3,
    name: "Members",
    link: "/dashboard/member",
    redirect: { path: '/dashboard/member/create' },
    allowRoles: ['admin'],
    icon: UserIcon,
    submenus: [
      {
        id: 1,
        icon: PlusSquareIcon,
        link: '/dashboard/member/create',
        name: 'Create',
      }
    ]
  },
  {
    id: 3,
    name: "Logout",
    link: "/auth/login",
    icon: LogOutIcon,
    allowRoles: ['admin', 'member'],
  },
];

export { navigation }