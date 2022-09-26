import Icons from "../../Icons";

export const SidebarData = [
    {
        title: 'Dashboard',
        color: 'bg-[#DB9936] text-white',
        path: '/',
        Icon: Icons.Dashboard(),
    },
    {
        title: 'Employee',
        color: 'bg-[#DB9936] text-white',
        path: '//',
        Icon: Icons.user(),
        subNav: [
            {
                title: 'List Employee',
                color: 'bg-[#DB9936] text-white',
                path: '/Employee/EmployeeLists',
                Icon: Icons.files(),
            },
            {
                title: 'Add Employee',
                color: 'bg-[#DB9936] text-white',
                path: '/Employee/AddorEditEmployee',
                Icon: Icons.user(),
            }
        ],
    },
    {
        title: 'Customer',
        color: 'bg-[#DB9936] text-white',
        path: '/Customer',
        Icon: Icons.chart(),
    },
    {
        title: 'Vendor',
        color: 'bg-[#DB9936] text-white',
        path: '/Vendor',
        Icon: Icons.suit_case(),
    },
];