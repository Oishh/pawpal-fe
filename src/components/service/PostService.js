import ImageService from "./ImageService";

const PostService = {
    getPostData() {
        return [
            {
                id: '1000',
                name: 'Jane',
                description: 'Lost a goldfish. If found, please contact 09123456784. Much appreciated!',
                image: ImageService.getPetImage1(),
                attachment: 'https://pixabay.com/photos/dog-golden-retriever-white-coat-2753369/',
            },

            {
                id: "1002",
                name: "Anna",
                description: "Lost a brown dog with a blue collar. Contact me at 09123456780 if found. Thanks!",
                image: ImageService.getPetImage2(),
                attachment: 'https://pixabay.com/photos/weimaraner-dog-beach-pet-black-dog-143753/',
            },
            {
                id: "1003",
                name: "John",
                description: "My white rabbit is missing. If seen, please call 09123456781. Appreciate it!",
                image: ImageService.getPetImage3(),
                attachment: 'https://pixabay.com/photos/dog-mammal-cute-charming-fur-5340892/',
            },
            {
                id: "1004",
                name: "Lisa",
                description: "Lost a green parrot. If found, please contact 09123456782. Thank you!",
                image: ImageService.getPetImage4(),
                attachment: 'https://pixabay.com/photos/cat-young-animal-kitten-mackerel-3535404/',
            },
            {
                id: "1005",
                name: "Mark",
                description: "My tortoise went missing. If spotted, call me at 09123456783. Thanks!",
                image: ImageService.getPetImage5(),
                attachment: 'https://pixabay.com/photos/kitten-snow-cat-animal-winter-pet-1102082/',
            }
        ];
    },

    getPosts() {
        return Promise.resolve(this.getPostData());
    },

};

export default PostService;

