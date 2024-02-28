type ImageRequire = number;

type CarouselItem = {
    id: number,
    img: ImageRequire,
    description: string
};

const carouselItems: CarouselItem[] = [
    {
        id: 1,
        img: require("../assets/homescreen/carousel/first-yawn.png"),
        description: "first yawn"
    },
    {
        id: 2,
        img: require("../assets/homescreen/carousel/first-smile.png"),
        description: "first smile"
    }
]
