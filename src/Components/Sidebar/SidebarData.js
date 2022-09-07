import Icons from "../Icons";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        Icon: Icons.Dashboard(),
    },
    {
        title: 'Employee',
        path: '/Employees',
        Icon: Icons.user(),
        IconClosed: "",
        IconOpened: "",
        subNav: [
            {
                title: 'List Employee',
                path: '/Employees',
                Icon: Icons.files(),
            },
            {
                title: 'Add Employee',
                path: '/AddEmployee',
                Icon: Icons.user(),
            }
        ],
    },
    {
        title: 'Customer',
        path: '/Customer',
        Icon: Icons.chart(),
    },
    {
        title: 'Vendor',
        path: '/Vendor',
        Icon: Icons.suit_case(),
    },
];