import HelloWorld from './components/HelloWorld.vue';
import DragAndDrop from './components/DragAndDrop.vue';

export const routes = [{
        path: '/',
        redirect: {
            name: 'DragAndDrop'
        }
    },
    {
        path: '',
        component: HelloWorld,
        children: [
            {
                path: '/DragAndDrop',
                component: DragAndDrop,
                name: 'DragAndDrop'
            },
        ]
    },
    {
        path: '*',
        redirect: {
            name: 'DragAndDrop'
        }
    }
]