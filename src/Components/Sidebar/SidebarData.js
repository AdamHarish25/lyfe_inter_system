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
        path: '/Employees',
        Icon: Icons.user(),
        IconClosed: "",
        IconOpened: "",
        subNav: [
            {
                title: 'List Employee',
                titleOver: '/Employees/List Employee',
                color: 'bg-[#DB9936] text-white',
                path: '/Employees/EmployeeLists',
                Icon: Icons.files(),
            },
            {
                title: 'Add Employee',
                titleOver: '/Employees/Add Employee',
                color: 'bg-[#DB9936] text-white',
                path: '/Employees/AddEmployee',
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