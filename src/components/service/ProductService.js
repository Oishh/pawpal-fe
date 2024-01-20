import ImageService from "./ImageService";

const ProductService = {
    getProductsData() {
        return [
            {
                id: '1000',
                name: 'Bella',
                age: '2 months old',
                gender: 'Male',
                weight: '7 kg',
                description: 'A small and playful kitten with a soft, grey coat. She loves to chase after balls of yarn and curl up in warm, sunny spots.',
                image: ImageService.getPetImage1(),
                breed: 'Puspin',
                category: 'Cat',
            },
            {
                id: '1001',
                name: 'Max',
                age: '5 months old',
                gender: 'Male',
                weight: '15 kg',
                description: 'A loyal and energetic golden retriever. He enjoys long walks in the park and is always ready to fetch a stick or ball.',
                image: ImageService.getPetImage2(),
                breed: 'Golden Retriever',
                category: 'Dog',
            },
            {
                id: '1002',
                name: 'Daisy',
                age: '7 months old',
                gender: 'Female',
                weight: '12 kg',
                description: 'A gentle and calm rabbit with a white coat. She loves munching on carrots and hopping around in the garden.',
                image: ImageService.getPetImage3(),
                breed: 'White Coat Rabbit',
                category: 'Rabbit',
            },
            {
                id: '1003',
                name: 'Buddy',
                age: '5 months old',
                gender: 'Male',
                weight: '21 kg',
                description: 'A friendly and sociable parrot with vibrant, multicolored feathers. He can mimic a few phrases and loves to sing in the morning.',
                image: ImageService.getPetImage4(),
                breed: 'Philippine Parrot',
                category: 'Bird',
            },
            {
                id: '1004',
                name: 'Luna',
                age: '8 months old',
                gender: 'Female',
                weight: '22 kg',
                description: 'A mysterious and elegant Siamese cat. She has striking blue eyes and enjoys the quiet solitude of night time.',
                image: ImageService.getPetImage5(),
                breed: 'Siamese',
                category: 'Cat',
            },
            {
                id: '1005',
                name: 'Charlie',
                age: '6 months old',
                gender: 'Male',
                weight: '20 kg',
                description: 'A mischievous and curious beagle. He’s always sniffing out new scents and loves to dig holes in the backyard.',
                image: ImageService.getPetImage1(),
                breed: 'Beagle',
                category: 'Dog',
            },
            {
                id: '1006',
                name: 'Coco',
                age: '9 months old',
                gender: 'Male',
                weight: '24 kg',
                description: 'A cuddly and affectionate guinea pig with a brown and white coat. She loves to squeak and whistle when she’s happy.',
                image: ImageService.getPetImage2(),
                breed: 'Capibara',
                category: 'Guinea Pig',
            },
            {
                id: '1007',
                name: 'Rocky',
                age: '4 months old',
                gender: 'Male',
                weight: '15 kg',
                description: 'A brave and strong German shepherd. He’s protective of his family and is always alert to any potential danger.',
                image: ImageService.getPetImage3(),
                breed: 'German Shepherd',
                category: 'Dog',
            },
        ];
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

};

export default ProductService;

