import { sqip } from 'sqip';

sqip({
    input: '/Users/<username>/Pictures/bilde.jpeg',
    output: '/Users/<username>/Pictures/bilde.jpeg',
    plugins: [
        {
            name: 'sqip-plugin-primitive',
            options: {
                numberOfPrimitives: 100,
                mode: 1,
                rep: 0,
            },
        },
        // {
        //     name: 'sqip-plugin-blur',
        //     options: {
        //         blur: 6,
        //     },
        // },
        // {
        //     name: 'sqip-plugin-pixels',
        //     options: {
        //         pixelSize: 20,
        //         width: 50,
        //     },
        // },
    ],
});
