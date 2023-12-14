import breadCrumbImg from '../assets/img/breadcrumb-trail.jpg';
//Photo by Jonny Caspari on Unsplash
import weedsImg from '../assets/img/weeds.jpg';
// Photo by LoboStudio Hamburg on Unsplash
import bootsImg from '../assets/img/boots.jpg';
// Photo by Jonathan Gallegos on Unsplash
import asyncImg from '../assets/img/mount-promise.jpg';
import GEZNOMagazine14 from '../assets/img/GEZNOMagazine14.jpg';

export const PROMOTIONS = [
    {
        id: 0,
        name: 'HGroove Style',
        image: GEZNOMagazine14,
        featured: true,
        description:
            'Get to know the art, the music, the personality'
    },
    {
        id: 1,
        name: 'Into The Weeds',
        image: weedsImg,
        featured: false,
        description:
            '5 days deep in the Redux National Monument, far from the beaten path, with only a reducer in your backpack. Guide provided.'
    },
    {
        id: 2,
        name: 'Bootstrap Teardown',
        image: bootsImg,
        featured: false,
        description: `In this weekend workshop, we'll rebuild your bootstraps from scratch, so you're ready for next-level excursions.`
    },
    {
        id: 3,
        name: 'Asynchronous Rendezvous',
        image: asyncImg,
        featured: false,
        description:
            'Meet up with your guide at the top of Promise Mountain. Or, try to. Good luck!'
    }
];
