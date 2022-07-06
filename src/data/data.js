
// service image
import developer from 'assets/images/service/developing.png';
import desain from 'assets/images/service/desain.png';
import uiux from 'assets/images/service/uiux.png';

const Header =
    [
        {
            title: 'Home',
            to: "/"
        },
        {
            title: 'Project',
            to: "/project"
        },
        {
            title: 'Certificate',
            to: "/certificate"
        },
    ];

const ServiceData = [
    {
        image: developer,
        title: 'Developer',
        deskription: 'Developer Documentation'
    },
    {
        image: uiux,
        title: 'UI/UX',
        deskription: 'UI UX Documentation'
    },
    {
        image: desain,
        title: 'Desain',
        deskription: 'Desain Documentation'
    }
]


const Data = {
    title: "Ahmad Nurul Musthopa"
};

export {
    Header,
    Data,
    ServiceData,
}