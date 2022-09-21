import Icons from "../Icons";

export const SidebarData = [
    {
        title: 'Dashboard',
        titleOver: 'Dashboard Overview',
        color: 'bg-[#DB9936] text-white',
        path: '/',
        Icon: Icons.Dashboard(),
    },
    {
        title: 'Employee',
        titleOver: '/Employees/List Employee',
        color: 'bg-[#DB9936] text-white',
        path: '/Employee',
        Icon: Icons.user(),
        IconClosed: "",
        IconOpened: "",
        subNav: [
            {
                title: 'List Employee',
                titleOver: '/Employee/List Employee',
                color: 'bg-[#DB9936] text-white',
                path: '/Employee',
                Icon: Icons.files(),
            },
            {
                title: 'Add Employee',
                titleOver: '/Employee/Add Employee',
                color: 'bg-[#DB9936] text-white',
                path: '/Employee/AddorEditEmployee',
                Icon: Icons.user(),
            }
        ],
    },
    {
        title: 'Customer',
        titleOver: '/Customer',
        color: 'bg-[#DB9936] text-white',
        path: '/Customer',
        Icon: Icons.chart(),
    },
    {
        title: 'Vendor',
        titleOver: '/Vendor',
        color: 'bg-[#DB9936] text-white',
        path: '/Vendor',
        Icon: Icons.suit_case(),
    },
];