/* eslint-disable jsx-a11y/anchor-is-valid */

import '../Styles';
import { CarouselDashboard } from './CarouselDashboard';
import { NormalDashboard } from './NormalDashboard';

export const Dashboard = () => {
    return <div id="Dashboard" className="w-auto h-auto">
        <NormalDashboard visiblity="hidden xl:block" />
        <CarouselDashboard visiblity="block xl:hidden" />
    </div>
}