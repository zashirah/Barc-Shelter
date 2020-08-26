const db = require("../db/connection");
const Pet = require("../models/pets");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const pets = [
    {
      type: "cat",
      name: "Sam",
      age: 1, // in years or months
      sex: "female",
      breed: "American Curl",
      bioPersonality: "She had 4 kittens when she was brought in. She was neutered and microchipped. Likes being indoors but will go outside. Loves cuddling up with you on couch or lounge chair. Needs new home today. Moving into small apt and can’t take her.",
      images: [
        "https://i.ytimg.com/vi/H5t0orjZSFg/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },
    {
      type: "cat",
      name: "Anna",
      age: 2, // in years or months
      sex: "female",
      breed: "Balinese",
      bioPersonality: "I love to play with my sister Cali. Since we do everything together, we need to go home together.So if you feel like you can be that caring and loving purrent",
      images: [
        "https://i.ytimg.com/vi/z9LhBZoitTo/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },
    {
      type: "cat",
      name: "Maya",
      age: 3, // in years or months
      sex: "female",
      breed: "American Short Hair",
      bioPersonality: "Total gossip queen. Claims to hate drama but secretly loves stirring the pot. Posts no makeup selfies, abuses the word literally, and dreams of landing her own reality show on Bravo. Her favorite Kardashian is Khloé, obviously. ",
      images: [
        "https://i.ytimg.com/vi/UNqF2MkcNR8/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },
    {
      type: "cat",
      name: "Mcguire",
      age: 4, // in years or months
      sex: "female",
      breed: "American Bobtail",
      bioPersonality: "I am 4 year old and a snuggle bunny. I love to be pet, and I love to cuddle with my humans. All of my babies have found a home and now it's my turn.So if you feel like you can be that caring and loving purrent,",
      images: [
        "https://techcrunch.com/wp-content/uploads/2014/08/cat-facts-3.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },
    {
      type: "cat",
      name: "Alice",
      age: 5, // in years or months
      sex: "female",
      breed: "Bengal",
      bioPersonality: "Has so clearly had work done. Thinks begging is beneath her. Lives on a Gwyneth Paltrow-approved diet of moon dust, organic bison essence, and gluten-free kibble. Will never admit that this is a wig",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Depth_of_field_Cat.jpg/1200px-Depth_of_field_Cat.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },
    {
      type: "cat",
      name: "Eva",
      age: 6, // in years or months
      sex: "female",
      breed: "Birman",
      bioPersonality: "She'll want to curl up next to you and provide soothing companionship. Eva is a six-year-old gal who'd do best in a quiet home, so please consider visiting her if you think you'd be a good match.",
      images: [
        "https://i.ytimg.com/vi/vEstcekeIyk/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },
    {
      type: "cat",
      name: "Ariana",
      age: 7, // in years or months
      sex: "female",
      breed: "Bengal",
      bioPersonality: "Is admittedly not very good in front of the camera. Has spent much of his adult life living with his mom. Trolls your blog. ",
      images: [
        "https://i.ytimg.com/vi/JLDVA2JkAQw/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },
    {
      type: "cat",
      name: "Sarah",
      age: 8, // in years or months
      sex: "female",
      breed: "Burmese",
      bioPersonality: "A lie is like a cat: you need to stop it before it gets out the door or it’s really hard to catch.",
      images: [
        "https://i.ytimg.com/vi/FEjZiCPuvqQ/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },
    {
      type: "cat",
      name: "Spots",
      age: 9, // in years or months
      sex: "female",
      breed: "Bombay",
      bioPersonality: "It is impossible to keep a straight face in the presence of one or more kittens.",
      images: [
        "https://i.ytimg.com/vi/LNYEb0t_inQ/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },
    {
      type: "cat",
      name: "Allison",
      age: 10, // in years or months
      sex: "female",
      breed: "Chartreux",
      bioPersonality: "Allison is painfully sweet. She's an earth angel who was sent to us to make us smile during these difficult times. Allison has had some medical challenges during her time here, but has always been a gracious and loving girl.",
      images: [
        "https://i.ytimg.com/vi/-4Dk8-rVAk0/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },
    {
      type: "cat",
      name: "Naomi",
      age: 11, // in years or months
      sex: "female",
      breed: "Burmilla",
      bioPersonality: " Her light is bright, and we hope she gets the chance to bestow it upon a deserving human! Naomi is one of those very special souls, and as much as we adore her, we know her dream is to be able to curl up on the lap of someone who loves her whenever she wants!",
      images: [
        "https://i.ytimg.com/vi/3I_FVVvmZcg/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",,
      ],
    },
    {
      type: "cat",
      name: "Hazel",
      age: 12, // in years or months
      sex: "female",
      breed: "Cymric",
      bioPersonality: "Cymric loves to be around his person, very affectionate and he loves to sleep with you. He does best with teens and up as younger children may overload him with hugs and kisses that can cause him to lash out.",
      images: [
        "https://i.ytimg.com/vi/Wrds7uujoAo/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    }, {
      type: "cat",
      name: "Bella",
      age: 13, // in years or months
      sex: "female",
      breed: "Cornish Rex",
      bioPersonality: "Sweet orange Bella girl! Bella has required medical care and treatment and is staying at our friends at Kitty Charm School in Mill Valley.  She is going to have some dental work but would love a home!!",
      images: [
        "https://i.ytimg.com/vi/-_IRKV5JIWU/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    }, {
      type: "cat",
      name: "Ava",
      age: 14, // in years or months
      sex: "female",
      breed: "Chausie",
      bioPersonality: "Ava is a sweet independent cat looking for a chill home, preferably without kids as she likes to be pet on her own terms. She is very beautiful and loving once she bonds to you. Ava will thrive with experienced cat folk who will give her lots of playtime, pets, and space when she wants. ",
      images: [
        "https://i.ytimg.com/vi/TfIHb1V3464/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    }, {
      type: "cat",
      name: "Claire",
      age: 15, // in years or months
      sex: "female",
      breed: "Cymric",
      bioPersonality: "Claire is the sweetest little kitty. She is a sucker for head and belly rubs and loves her good morning cuddles. She is chatty, but with the softest meow. ",
      images: [
        "https://i.ytimg.com/vi/byMKOWsEIjo/maxresdefault.jpg",
        "https://i.ytimg.com/vi/ZakV2xtqqMM/maxresdefault.jpg",
        "http://2.bp.blogspot.com/-6CagU-Snlkk/UdRB-qVoYJI/AAAAAAAAlpY/ASB62XV3KwI/s1600/funny-cat-pictures-057-019.jpg",
        "https://cnet2.cbsistatic.com/img/VNQuGzzWvrGZ6sfGh_DoGt3fI7c=/2017/08/08/89825b81-b4fa-4484-b190-98d5c1abb853/cat-and-spray.jpg",
        "http://i.ytimg.com/vi/RdEXe7sYHyg/maxresdefault.jpg",
      ],
    },    {
      type: "dog",
      name: "Max",
      age: 1, // in years or months
      sex: "male",
      breed: "lab",
      bioPersonality: "I am such a little lovey-dovey guy! I LOVE affection and attention! I make adorable and very passionate squeaking sounds of delight when my foster parents come home from work, scamper (fast!) right over to them as they walk in the door, and nuzzle into their legs like crazy.",
      images: [
        "https://i.ytimg.com/vi/h008pKewmHU/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "Zoe",
      age: 2, // in years or months
      sex: "female",
      breed: "Akita",
      bioPersonality: "I love attention and affection, it is THE BEST. When I want some, I’ll go over to one of my people and look up at them with my best puppy-dog eyes, which I am told are sweet and soulful and like little pools of love.",
      images: [
        "https://i.ytimg.com/vi/em3EfFPNq1s/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "Kona",
      age: 3, // in years or months
      sex: "male",
      breed: "Alaskan Malamute",
      bioPersonality: "I LOVE people!!!! When I see a person (for instance, if we are out on a leashed walk), I get so happy about the prospect of meeting them (I mean super duper happy!!)–my ears go up (“Lookee there! A person, yippee!”).",
      images: [
        "https://i.ytimg.com/vi/OKjhVRHxcHo/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "Molly",
      age: 4, // in years or months
      sex: "female",
      breed: "Hound",
      bioPersonality: "I promise you that I am the sweetest. Like, I’m just learning the words “sit” and “down” but I am a natural lover because if you say “can I get a kiss?” you will get one from me! Believe it or not, I know the word “kiss!”",
      images: [
        "https://i.ytimg.com/vi/yYwAJrAdUbY/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "Abby",
      age: 5, // in years or months
      sex: "female",
      breed: "Foxhound",
      bioPersonality: "One of the coolest new things in my life is a Kong that is filled with treats and peanut butter!! Oh my gosh! Unbelievable! And my current foster mom gives me one every single day. I like almost all chew toys–soft furry ones and hard Nylabone types, and I especially like chewing on and playing with them when my person is nearby.",
      images: [
        "https://i.ytimg.com/vi/tTguSY-pKBQ/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "Ruby",
      age: 6, // in years or months
      sex: "female",
      breed: "Eskimo Dog",
      bioPersonality: "I love attention and affection, it is THE BEST. When I want some, I’ll go over to one of my people and look up at them with my best puppy-dog eyes, which I am told are sweet and soulful and like little pools of love.",
      images: [
        "https://i.ytimg.com/vi/viLq5y3YnkA/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "React",
      age: 7, // in years or months
      sex: "female",
      breed: "Cocker Spaniel",
      bioPersonality: "One of the coolest new things in my life is a Kong that is filled with treats and peanut butter!! Oh my gosh! Unbelievable! And my current foster mom gives me one every single day. I like almost all chew toys–soft furry ones and hard Nylabone types, and I especially like chewing on and playing with them when my person is nearby.",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/d/d8/Chinese_Chongqing_Dog_H%C3%BCndin.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "Jsvs",
      age: 8, // in years or months
      sex: "female",
      breed: "Hairless Terrier",
      bioPersonality: "I love attention and affection, it is THE BEST. When I want some, I’ll go over to one of my people and look up at them with my best puppy-dog eyes, which I am told are sweet and soulful and like little pools of love.",
      images: [
        "https://i.pinimg.com/736x/32/db/c5/32dbc51eab4202d62d4733328d12aee9--catahoula-leopard-dog-catahoula-cur.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "Coco",
      age: 9, // in years or months
      sex: "female",
      breed: "Terrier",
      bioPersonality: "One of the coolest new things in my life is a Kong that is filled with treats and peanut butter!! Oh my gosh! Unbelievable! And my current foster mom gives me one every single day. I like almost all chew toys–soft furry ones and hard Nylabone types, and I especially like chewing on and playing with them when my person is nearby.",
      images: [
        "https://i.ytimg.com/vi/9itpdJFDZ6w/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "Dexter",
      age: 10, // in years or months
      sex: "male",
      breed: "Sheperd",
      bioPersonality: "I love attention and affection, it is THE BEST. When I want some, I’ll go over to one of my people and look up at them with my best puppy-dog eyes, which I am told are sweet and soulful and like little pools of love.",
      images: [
        "https://i.ytimg.com/vi/K3ivhgZw3o8/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "Bailey",
      age: 11, // in years or months
      sex: "male",
      breed: "Cattle Dog",
      bioPersonality: "One of the coolest new things in my life is a Kong that is filled with treats and peanut butter!! Oh my gosh! Unbelievable! And my current foster mom gives me one every single day. I like almost all chew toys–soft furry ones and hard Nylabone types, and I especially like chewing on and playing with them when my person is nearby.",
      images: [
        "https://i.ytimg.com/vi/gVj9QRv9FpI/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
    {
      type: "dog",
      name: "Buddy",
      age: 12, // in years or months
      sex: "male",
      breed: "Kelpie",
      bioPersonality: "I love attention and affection, it is THE BEST. When I want some, I’ll go over to one of my people and look up at them with my best puppy-dog eyes, which I am told are sweet and soulful and like little pools of love.",
      images: [
        "https://i.ytimg.com/vi/MLEUJrHRw3o/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    }, {
      type: "dog",
      name: "Rufus",
      age: 13, // in years or months
      sex: "male",
      breed: "Basset Hound",
      bioPersonality: "One of the coolest new things in my life is a Kong that is filled with treats and peanut butter!! Oh my gosh! Unbelievable! And my current foster mom gives me one every single day. I like almost all chew toys–soft furry ones and hard Nylabone types, and I especially like chewing on and playing with them when my person is nearby.",
      images: [
        "https://i.ytimg.com/vi/NMh6kJArGHo/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    }, {
      type: "dog",
      name: "Jack",
      age: 14, // in years or months
      sex: "male",
      breed: "Beagle",
      bioPersonality: "One of the coolest new things in my life is a Kong that is filled with treats and peanut butter!! Oh my gosh! Unbelievable! And my current foster mom gives me one every single day. I like almost all chew toys–soft furry ones and hard Nylabone types, and I especially like chewing on and playing with them when my person is nearby.",
      images: [
        "https://i.ytimg.com/vi/XvSaT_ZOeB8/maxresdefault.jpg",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    }, {
      type: "dog",
      name: "Spy",
      age: 15, // in years or months
      sex: "female",
      breed: "Bearded Collie",
      bioPersonality: "I love attention and affection, it is THE BEST. When I want some, I’ll go over to one of my people and look up at them with my best puppy-dog eyes, which I am told are sweet and soulful and like little pools of love.",
      images: [
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://i.ytimg.com/vi/HhLEIjw4N-4/maxresdefault.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2.CAO_in_Hungary.jpg/1200px-2.CAO_in_Hungary.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tetsuro.jpg/1200px-Tetsuro.jpg",
        "http://3.bp.blogspot.com/-5A6jtEC9b6k/UOQkmXI88XI/AAAAAAAALi4/HQeYstE8Vu8/s1600/Beagle-19.jpg",
      ],
    },
  ];

  await Pet.insertMany(pets);
  console.log("Created pets!");
};
const run = async () => {
  await main();
  db.close();
};

run();
